import React, {Component} from "react";
import {Route} from "react-router-dom";
import routes from "./routes";
import Header from "./components/header"
import {withRouter} from 'react-router-dom'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

const RouterHeader = withRouter(Header);

class App extends Component {
    render() {
        return (
            <div>
                <RouterHeader/>
                <div>{routes.map((route, i) => <Route key={i} {...route} />)}</div>
            </div>
        );
    }
}

export default App;
