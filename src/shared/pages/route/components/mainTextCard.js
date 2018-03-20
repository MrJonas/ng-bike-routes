import React from 'react';
import {Card, CardTitle, CardBlock} from 'reactstrap';

const MainText = (props) => (
    <Card className="route-text">
        <CardBlock>
            <h2 className="text-left">{props.route.title}</h2>
            <div dangerouslySetInnerHTML={{__html: props.route.body}}></div>
        </CardBlock>
    </Card>
);

export default MainText;