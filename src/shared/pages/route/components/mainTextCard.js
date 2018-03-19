import React from 'react';
import {Card, CardTitle, CardBlock} from 'reactstrap';

const MainText = (props) => (
    <Card className="route-text">
        <CardBlock>
            <CardTitle className="text-left"><h2>{props.route.title}</h2></CardTitle>
            <div dangerouslySetInnerHTML={{__html: props.route.body}}></div>
        </CardBlock>
    </Card>
);

export default MainText;