import React from 'react';
import {RouteMap} from './components/route.map';
import {RouteList} from './components/route.map.side.list';
import {RouteHeader} from './components/route.map.header';
import {fetchAllRoutes} from "../../actions";
import {connect} from "react-redux";

class MapPage extends React.Component {

    static initialAction() {
        return fetchAllRoutes();
    }

    constructor(props) {
        super(props);
        this.state = {
            routes: [],
            mode: 'all',
            route: {},
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.routes && nextProps.routes.length > 0) {
            this.setState({routes:nextProps.routes});
        }
    }

    componentDidMount() {
        if (!this.props.routes) {
            this.props.dispatch(MapPage.initialAction());
        } else {
            this.setState({routes:this.props.routes});
        }
    }

    setRoute(index) {
        if (this.state.route && this.state.route.url === this.state.routes[index].url) {
            this.showAllRoutes();
        } else {
            this.setState({
                mode: 'one',
                route: this.state.routes[index],
            });
        }
    }

    showAllRoutes() {
        this.setState({
            mode: 'all',
            route: {},
        });
    }

    render() {
        return (
            <div className="map-container">
                <div className="map-sidebar">
                    <div className="map-route-list">
                        <RouteList toogleMode={(index) => this.setRoute(index)} route={this.state.route} routes={this.state.routes}/>
                    </div>
                </div>
                <div className="map-view-box">
                    <div className={"map-control-panel " + (this.state.mode == 'one' && "show-map-control-panel")}>
                        <RouteHeader route={this.state.route} mode={this.state.mode}
                                     showAllRoutes={() => this.showAllRoutes()}/>
                    </div>
                    <div className={"map-view "  + (this.state.mode == 'all' && "large-map-view")}>
                        <RouteMap
                            routes={this.state.routes}
                            route={this.state.route}
                            mode={this.state.mode}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
   return {
        routes: state.routes
    }
};

export default connect(mapStateToProps)(MapPage);
