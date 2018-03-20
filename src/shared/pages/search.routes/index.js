import React from 'react';
import RouteCard from './../../components/cards/route.card';
import {InputGroup, InputGroupAddon, Input} from 'reactstrap';
import Footer from './../../components/footer';
import {debounce} from 'throttle-debounce';
import {fetchAllRoutes} from "../../actions";
import {connect} from "react-redux";
import TEXT from './../../text';

class RouteSearch extends React.Component {

    static initialAction() {
        return fetchAllRoutes();
    }

    constructor(props) {
        super(props);
        this.state = {
            routes: [],
            value: '',
            loading: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.searchRoutes = debounce(500, this.searchRoutes);
    }

    componentDidMount() {
        if (!this.props.routes) {
            this.props.dispatch(RouteSearch.initialAction());
        } else {
            this.setState({routes: this.props.routes});
        }
    }

    handleChange(event) {
        this.setState({loading: true})
        this.setState({value: event.target.value});
        this.searchRoutes(event.target.value);
    }

    searchRoutes(text) {
        fetch('/api/route/search', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text})
        })
            .then(result => result.json()
                    .then(routes => {
                        this.setState({routes});
                        this.setState({loading: false})
                    }, err => this.setState({loading: false}))
                , err => this.setState({loading: false}));
    }

    render() {
        return (
            <div>
                <div className="page-layout">
                    <div className="container route-list-page">
                        <div className="row my-4">
                            <div className="col-12">
                                <InputGroup>
                                    <InputGroupAddon>
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </InputGroupAddon>
                                    <Input placeholder={TEXT.ROUTE_SEARCH_PAGE.SEARCH_INPUT_PLACEHOLDER}
                                           value={this.state.value}
                                           onChange={this.handleChange}/>
                                </InputGroup>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.routes && !this.state.loading && this.state.routes.length === 0 &&
                            <div className="col-12 text-center">{TEXT.ROUTE_SEARCH_PAGE.NO_ROUTES_FOUND}</div>
                            }
                            {this.state.routes && this.state.routes.map(route =>
                                <div key={route.url} className="col-md-4 my-2">
                                    <RouteCard bikeRoute={route}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    routes: state.routes
});

export default connect(mapStateToProps)(RouteSearch);