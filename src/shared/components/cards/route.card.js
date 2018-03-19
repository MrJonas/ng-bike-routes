import React from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, CardFooter, Button
} from 'reactstrap';
import {Route} from 'react-router-dom';
import TEXT from "./../../text";

class RouteCard extends React.Component {

    goToRoutePage(history) {
        history.push(`/marsrutas/${this.props.bikeRoute.url}`)
    }

    render() {
        return (
            <div>
                <Route render={({history}) => (
                    <Card className="route-card" onClick={() => this.goToRoutePage(history)}>
                        <CardImg top width="100%" src={`/api/images/${this.props.bikeRoute.main_image_id}`}
                                 alt={this.props.bikeRoute.title}
                                 style={{cursor: 'pointer'}}/>
                        <CardBlock>
                            <CardTitle className="text-center"
                                       style={{cursor: 'pointer'}}>{this.props.bikeRoute.title}</CardTitle>
                            <CardSubtitle className="text-muted text-center">
                                <i className="fa fa-road mr-1" aria-hidden="true"></i>
                                {this.props.bikeRoute.distance} {TEXT.OTHER.KM}
                                <i className="fa fa-clock-o ml-2 mr-1" aria-hidden="true"></i>
                                {this.props.bikeRoute.duration}
                            </CardSubtitle>
                            <CardText className="text-center mt-2">{this.props.bikeRoute.short_description}</CardText>
                        </CardBlock>
                        <CardFooter className="text-muted text-center">
                            <Button onClick={() => this.goToRoutePage(history)}>{TEXT.OTHER.SHOW_ROUTE_BUTTON}</Button>
                        </CardFooter>
                    </Card>
                )}/>
            </div>
        );
    }
}

export default RouteCard;


