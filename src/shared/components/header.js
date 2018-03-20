import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import TEXT from './../text';

const ROUTES = {
    MAP: '/zemelapis',
    ROUTE_LIST: '/marsrutai',
    ABOUT: '/apie',
    MAIN: '/',
};

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            pathname: ""
        };
        this.props.history.listen((location, action) => {
            this.setPathname(location.pathname);
        });
    }

    setPathname(pathname) {
        this.setState({pathname});
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="inverse" toggleable>
                    <NavbarToggler style={{color: "white"}} aria-hidden="true" right onClick={this.toggle}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </NavbarToggler>
                    <NavbarBrand href="/">{TEXT.HEADER.NAME}</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Route render={({history}) => (
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <a  onClick={() => history.push(ROUTES.MAIN)} rel="noopener"
                                    className={"nav-link text-white " + (this.state.pathname === ROUTES.MAIN ? "active" : "")}
                                >{TEXT.HEADER.ROUTE_MAIN}</a>
                            </NavItem>
                            <NavItem>
                                <a  onClick={() => history.push(ROUTES.ROUTE_LIST)} rel="noopener"
                                    className={"nav-link text-white " + (this.state.pathname === ROUTES.ROUTE_LIST ? "active" : "")}
                                >{TEXT.HEADER.ROUTE_ROUTES}</a>
                            </NavItem>
                            <NavItem className="hidden-sm-down">
                                <a  onClick={() => history.push(ROUTES.MAP)} rel="noopener"
                                    className={"nav-link text-white " + (this.state.pathname === ROUTES.MAP ? "active" : "")}
                                >{TEXT.HEADER.ROUTE_MAP}</a>
                            </NavItem>
                            <NavItem>
                                <a  onClick={() => history.push(ROUTES.ABOUT)} rel="noopener"
                                    className={"nav-link text-white " + (this.state.pathname === ROUTES.ABOUT ? "active" : "")}
                                >{TEXT.HEADER.ROUTE_ABOUT}</a>
                            </NavItem>
                            <NavItem>
                                <a href="https://www.facebook.com/dviraciumarsrutai.lt/" rel="noopener" target="_blank"
                                   className="nav-link text-white"><i className="fa fa-lg fa-facebook-square"
                                                                      aria-hidden="true"></i></a>
                            </NavItem>
                        </Nav>
                        )}/>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(Header);

