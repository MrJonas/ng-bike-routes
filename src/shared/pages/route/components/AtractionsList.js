import React from 'react';
import {Card, CardTitle, CardBlock} from 'reactstrap';
import TEXT from './../../../text';

const AttractionList = (props) => (
    <Card className="my-2">
        <CardBlock>
            <CardTitle className="text-left">{TEXT.ROUTE_PAGE.ATTRACTIONS_TITLE}</CardTitle>
            <ul>
                {props.route.atractions.map(atraction => {
                        return !atraction.show_only_in_map &&
                            <li key={atraction.name}>
                                <b>{atraction.name}.</b> {atraction.description}</li>
                    }
                )}
            </ul>
        </CardBlock>
    </Card>
);

export default AttractionList;