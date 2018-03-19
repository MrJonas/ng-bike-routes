import React from 'react';
import {Card, CardTitle, CardBlock} from 'reactstrap';
import FacebookProvider, {Page} from 'react-facebook';
import TEXT from './../../../text';

class FollowUS extends React.Component {

    componentDidMount() {
       document.addEventListener('fb_init', e => FB.XFBML.parse());
    }

    render() {
        return (
            <Card className="mb-2">
                <CardBlock>
                    <CardTitle className="text-left">{TEXT.ROUTE_PAGE.FOLLOW_US}</CardTitle>
                    <FacebookProvider appId="fb-root">
                        <Page href="https://www.facebook.com/dviraciumarsrutai.lt/" tabs=""/>
                    </FacebookProvider>
                </CardBlock>
            </Card>
        );
    }
}

export default FollowUS;