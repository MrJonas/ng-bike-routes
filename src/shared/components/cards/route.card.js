import React from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, CardFooter, Button
} from 'reactstrap';
import {Route} from 'react-router-dom';

class RouteCard extends React.Component {

    goToRoutePage(history) {
        history.push(`/marsrutas/${this.props.bikeRoute.url}`)
    }

    render() {
        return (
            <div>
                {/*<a href={`/marsrutas/${this.props.bikeRoute.url}`}>*/}
                <Route render={({history}) => (
                <Card className="route-card" onClick={() => this.goToRoutePage(history)}>
                    <CardImg top width="100%" src={`/api/images/${this.props.bikeRoute.main_image_id}`}
                             alt={this.props.bikeRoute.title}
                             style={{cursor: 'pointer'}}/>
                    <CardBlock>
                        <CardTitle className="text-center" style={{cursor: 'pointer'}}>{this.props.bikeRoute.title}</CardTitle>
                        <CardSubtitle className="text-muted text-center">
                            <i className="fa fa-road mr-1" aria-hidden="true"></i>
                            {this.props.bikeRoute.distance} km
                            <i className="fa fa-clock-o ml-2 mr-1" aria-hidden="true"></i>
                            {this.props.bikeRoute.duration}
                        </CardSubtitle>
                        <CardText className="text-center mt-2">{this.props.bikeRoute.short_description}</CardText>
                    </CardBlock>
                    <CardFooter className="text-muted text-center">
                            <Button onClick={() => this.goToRoutePage(history)}>Plačiau</Button>
                    </CardFooter>
                </Card>
                )}/>
                {/*</a>*/}
            </div>
        );
    }
}

export default RouteCard;


