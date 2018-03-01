import React from 'react';
import 'whatwg-fetch';
import {Card, CardTitle, CardBlock} from 'reactstrap';
import Footer from './../../components/footer';
import LazyLoad from 'react-lazyload';
import Gallery from 'react-grid-gallery';
import FacebookProvider, { Page, Share } from 'react-facebook';

const DMGallery = (props) =>
    <Gallery images={props.images} maxRows={3}/>;

class RoutePage extends React.Component {

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
        document.addEventListener('fb_init', e => FB.XFBML.parse());
        fetch(`/api/route/${this.props.match.params.url}`)
            .then(result => {
                result.json().then(
                    route => this.setRoute(route),
                    err => console.log(err))

            }, err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="container my-4" style={{minHeight: 'calc(100vh - 200px)'}}>
                    {this.state.route &&
                    <div className="row">
                        <div className="col-md-8">

                            <Card className="route-text">
                                <CardBlock>
                                    <CardTitle className="text-left">{this.state.route.title}</CardTitle>
                                    <FacebookProvider appId="222603034981490">
                                        <Share href="https://dviraciumarsrutai.lt/#/marsrutas/traku_apylinkes">
                                            <button type="button">Dalintis</button>
                                        </Share>
                                    </FacebookProvider>
                                    <LazyLoad>
                                        <div dangerouslySetInnerHTML={{__html: this.state.route.body}}></div>
                                    </LazyLoad>
                                </CardBlock>
                            </Card>

                            {this.state.route.atractions &&
                            <Card className="my-2">
                                <CardBlock>
                                    <CardTitle className="text-left">Lankytinos vietos</CardTitle>
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
                                    <CardTitle className="text-left">Informacija</CardTitle>
                                    <div>
                                        <i className="fa fa-road" aria-hidden="true"></i>
                                        <span> {this.state.route.distance} km </span>
                                    </div>
                                    <div>
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <span> {this.state.route.duration} </span>
                                    </div>
                                    {this.state.route.access_by_train &&
                                    <div>
                                        <i className="fa fa-train" aria-hidden="true"></i>
                                        <span> Maršrutas pasiekiamas traukiniu </span>
                                    </div>
                                    }
                                </CardBlock>
                            </Card>
                            <Card className="mb-2">
                                <CardBlock >
                                    <CardTitle className="text-left">Galerija</CardTitle>
                                    <DMGallery images={this.state.images}/>
                                </CardBlock>
                            </Card>
                            <Card className="mb-2">
                                <CardBlock >
                                    <CardTitle className="text-left">Sek mus facebook'e!</CardTitle>
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

export default RoutePage;
