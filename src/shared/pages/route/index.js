import React from 'react';
import 'whatwg-fetch';
import {Card, CardTitle, CardBlock} from 'reactstrap';
import Footer from './../../components/footer';
import Gallery from 'react-grid-gallery';
import FacebookProvider, { Page, Share } from 'react-facebook';
import {fetchOneRoute} from "../../actions";
import {connect} from "react-redux";

import TEXT from './../../text';

const DMGallery = (props) =>
    <Gallery images={props.images} maxRows={3}/>;

class RoutePage extends React.Component {

    static initialAction(url) {
        return fetchOneRoute(url);
    }

    constructor() {
        super();
        this.state = {images: [], route: null};
    }

    setRoute(route) {
        let images = route.images ? route.images.map(image => {
            return {
                src: `/api/images/${image.id}`,
                thumbnail: `/api/images/${image.id}`,
                thumbnailWidth: 200,
                thumbnailHeight: 100
            }
        }) : [];
        this.setState({route});
        this.setState({images});
    }

    componentDidMount() {
        if (!this.props.route ) {
            this.props.dispatch(RoutePage.initialAction(this.props.match.params.url));
        } else {
            document.addEventListener('fb_init', e => FB.XFBML.parse());
            this.setRoute(this.props.route);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.route) {
            this.setState({route:nextProps.route});
        }
    }

    render() {
        return (
            <div>
                <div className="container my-4 min-page-height">
                    {this.state.route &&
                    <div className="row">
                        <div className="col-md-8">

                            <Card className="route-text">
                                <CardBlock>
                                    <CardTitle className="text-left">{this.state.route.title}</CardTitle>
                                    <div dangerouslySetInnerHTML={{__html: this.state.route.body}}></div>
                                </CardBlock>
                            </Card>

                            {this.state.route.atractions &&
                            <Card className="my-2">
                                <CardBlock>
                                    <CardTitle className="text-left">{TEXT.ROUTE_PAGE.ATTRACTIONS_TITLE}</CardTitle>
                                    <ul>
                                        {this.state.route.atractions.map(atraction => {
                                                return !atraction.show_only_in_map &&
                                                    <li key={atraction.name}>
                                                        <b>{atraction.name}.</b> {atraction.description}</li>
                                            }
                                        )}
                                    </ul>
                                </CardBlock>
                            </Card>
                            }
                        </div>
                        <div className="col-md-4">
                            <Card className="mb-2">
                                <CardBlock >
                                    <CardTitle className="text-left">{TEXT.ROUTE_PAGE.INFO_TITLE}</CardTitle>
                                    <div>
                                        <i className="fa fa-road" aria-hidden="true"></i>
                                        <span> {this.state.route.distance} {TEXT.OTHER.KM} </span>
                                    </div>
                                    <div>
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <span> {this.state.route.duration} </span>
                                    </div>
                                    {this.state.route.access_by_train &&
                                    <div>
                                        <i className="fa fa-train" aria-hidden="true"></i>
                                        <span> {TEXT.ROUTE_PAGE.BY_TRAIN}</span>
                                    </div>
                                    }
                                </CardBlock>
                            </Card>
                            <Card className="mb-2">
                                <CardBlock >
                                    <CardTitle className="text-left">{TEXT.ROUTE_PAGE.GALLERY}</CardTitle>
                                    <DMGallery images={this.state.images}/>
                                </CardBlock>
                            </Card>
                            <Card className="mb-2">
                                <CardBlock >
                                    <CardTitle className="text-left">{TEXT.ROUTE_PAGE.FOLLOW_US}</CardTitle>
                                    <FacebookProvider appId="fb-root">
                                        <Page href="https://www.facebook.com/dviraciumarsrutai.lt/" tabs=""/>
                                    </FacebookProvider>
                                </CardBlock>
                            </Card>
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

const mapStateToProps = state => ({
    route: state.route.route
});

export default connect(mapStateToProps)(RoutePage);
