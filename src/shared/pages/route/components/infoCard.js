import React from 'react';
import {Card, CardTitle, CardBlock} from 'reactstrap';
import TEXT from './../../../text';

const InfoCard = (props) => (
    <Card className="mb-2">
        <CardBlock >
            <CardTitle className="text-left">{TEXT.ROUTE_PAGE.INFO_TITLE}</CardTitle>
            <div>
                <i className="fa fa-road" aria-hidden="true"></i>
                <span> {props.route.distance} {TEXT.OTHER.KM} </span>
            </div>
            <div>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <span> {props.route.duration} </span>
            </div>
            {props.route.access_by_train &&
            <div>
                <i className="fa fa-train" aria-hidden="true"></i>
                <span> {TEXT.ROUTE_PAGE.BY_TRAIN}</span>
            </div>
            }
        </CardBlock>
    </Card>
);

export default InfoCard;