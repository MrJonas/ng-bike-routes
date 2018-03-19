import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router-dom";
import {getHtml} from './render.helpers'
import routes from "../shared/routes";
import configureStore from "./../shared/store/";
import App from "../shared/App";
import "source-map-support/register";
import compression from 'compression';
import api from "./api/index";
import config from "./api/config"

const app = express();

app.use(compression());

app.use(express.static("dist/"));

app.use("/api", api);

app.get("*", (req, res, next) => {
  const store = configureStore();

  const promises = routes.reduce((acc, route) => {
    if (matchPath(req.url, route) && route.component && route.component.initialAction) {
        if(req.url.includes('/marsrutas/')) {
            acc.push(Promise.resolve(store.dispatch(route.component.initialAction(req.url.replace('/marsrutas/', '')))));
        } else {
            acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
        }
    }
    return acc;
  }, []);

  Promise.all(promises)
    .then(() => {
      const context = {};
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );

      const initialData = store.getState();

      res.send(getHtml(initialData, markup));
    })
    .catch(next);
});

app.listen(config.expressPORT, () => {
  console.log(`Server is listening ${config.expressPORT}`);
});
