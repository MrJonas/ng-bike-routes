import React from 'react';
import Footer from './../../components/footer';
import {fetchOneRoute} from "../../actions";
import {connect} from "react-redux";

import Gallery from "./components/imageGallery";
import FollowUS from "./components/followUS";
import InfoCard from "./components/infoCard";
import AttractionList from "./components/AtractionsList";
import MainText from "./components/mainTextCard";
import RoutePageMap from "./components/RoutePageMap";
import CreditToIdea from "./components/creditToIdea";
import TravelDate from "./components/travelDate";

class RoutePage extends React.Component {

    static initialAction(url) {
        return fetchOneRoute(url);
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.route) {
            this.props.dispatch(RoutePage.initialAction(this.props.match.params.url));
        }
    }

    render() {
        return (
            <div>
                <div className="no-padding  my-3 my-lg-5 min-page-height">
                    {this.props.route &&
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <MainText route={this.props.route}/>
                                <AttractionList route={this.props.route}/>
                            </div>
                            <div className="col-md-4">
                                <InfoCard route={this.props.route}/>
                                <RoutePageMap route={this.props.route}/>
                                <Gallery images={this.props.route.images}/>
                                <CreditToIdea route={this.props.route}/>
                                <TravelDate route={this.props.route}/>
                                <FollowUS />
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <Footer/>
            </div>
        );
    }

}
;

const mapStateToProps = (state, ownProps) => {
    if (state.route.route && ownProps.match.params.url.indexOf(state.route.route.url) === -1) {
        return {route: null};
    }
    return {route: state.route.route};
};

export default connect(mapStateToProps)(RoutePage);
