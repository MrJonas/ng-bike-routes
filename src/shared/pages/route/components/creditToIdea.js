import React from 'react';
import {Card, CardTitle, CardBlock} from 'reactstrap';
import TEXT from './../../../text';

const CreditToIdea = (props) => (
    <Card className="mb-2 route-text">
        <CardBlock >
            <CardTitle className="text-left">{TEXT.ROUTE_PAGE.CREDIT_TO}</CardTitle>
            <div dangerouslySetInnerHTML={{__html: props.route.idea_credit_to}}></div>
        </CardBlock>
    </Card>
);

export default CreditToIdea;