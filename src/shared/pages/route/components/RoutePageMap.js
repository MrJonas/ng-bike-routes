import React from 'react';
import {Card, CardTitle, CardBlock} from 'reactstrap';
import {RouteMap} from "./../../map/components/route.map";
import TEXT from './../../../text';

const zoomOutRoute = (route) => Object.assign({}, route, {zoom: route.zoom - 1})

const RoutePageMap = (props) => (
    <Card className="mb-2">
        <CardBlock >
            <CardTitle className="text-left">{TEXT.ROUTE_PAGE.ROUTE_MAP}</CardTitle>
            <div style={{height: '400px'}}>
                <RouteMap mode={'one'} routes={[]} route={zoomOutRoute(props.route)}/>
            </div>
        </CardBlock>
    </Card>
);

export default RoutePageMap;