import React from 'react';
import {Card, CardTitle, CardBlock} from 'reactstrap';
import TEXT from './../../../text';

const travelDate = (props) => (
    <Card className="mb-2">
        <CardBlock >
            <CardTitle className="text-left">{TEXT.ROUTE_PAGE.TRAVEL_DATE}</CardTitle>
            <div dangerouslySetInnerHTML={{__html: props.route.travel_date}}></div>
        </CardBlock>
    </Card>
);

export default travelDate;