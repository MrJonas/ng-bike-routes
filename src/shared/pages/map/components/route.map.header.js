import React from 'react';
import {Button} from 'reactstrap';
import {Route} from 'react-router-dom';
import TEXT from "./../../../text";

export const RouteHeader = (props) =>
    props.route ?
        <div className="row p-0 m-0">
            <div className="col-md-9 p-2 m-0">
                <Route render={({history}) => (
                <h5 onClick={()=> history.push(`/marsrutas/${props.route.url}`)} style={{cursor: 'pointer'}}>
                    {props.route.title}
                    <span className="text-muted" style={{fontSize: '14px', marginLeft: '5px'}}>
                        <i className="fa fa-road mr-1" aria-hidden="true"></i>
                        {props.route.distance} {TEXT.OTHER.KM}
                        <i className="fa fa-clock-o ml-2 mr-1" aria-hidden="true"></i>
                        {props.route.duration}
                    </span>
                </h5>
                )}/>
                <p className="card-text">{props.route.short_description}</p>
            </div>
            <div className="col-md-3 p-4 m-0 text-center">
                <Button color="secondary" size="md" className="pull-right" style={{cursor: 'pointer'}} onClick={() => props.showAllRoutes()}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </Button>
                <Route render={({history}) => (
                <Button color="primary" size="md" className="pull-right mx-1" style={{cursor: 'pointer'}} onClick={()=> history.push(`/marsrutas/${props.route.url}`)}>
                    Daugiau
                </Button>
                 )}/>
            </div>
        </div> :
        <div></div>;
