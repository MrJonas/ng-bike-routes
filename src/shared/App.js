import React, {Component} from "react";
import {Route, Router} from "react-router-dom";
import routes from "./routes";
import Header from "./components/header";
import withTracker from './tracker';
import Cookies from "./components/cookieConsent";
//App css:
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => (
    <div>
        <Cookies/>
        <Header/>
        <div>{routes.map((route, i) => <Route key={i} {...route} component={withTracker(route.component)}/>)}</div>
    </div>
);

export default App;
