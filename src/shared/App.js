import React, {Component} from "react";
import {Route} from "react-router-dom";
import routes from "./routes";
import Header from "./components/header"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>{routes.map((route, i) => <Route key={i} {...route} />)}</div>
            </div>
        );
    }
}

export default App;
