import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import {Route} from 'react-router-dom';
import TEXT from "../../../../text";

const welcomeBox = (props) => (
    <div className="no-padding">
        <Jumbotron fluid className="welcome-box text-white">
            <div className="container">
                <div className="welcome-box-text">
                    <h1 className="display-5">{TEXT.MAIN_PAGE.WELCOME_BOX.TITLE}</h1>
                    <p className="lead">{TEXT.MAIN_PAGE.WELCOME_BOX.PARAGRAPH_1}</p>
                    <hr className="my-2"/>
                    <p className="lead">{TEXT.MAIN_PAGE.WELCOME_BOX.PARAGRAPH_2}</p>
                    <p className="lead">
                        <Route render={({history}) => (
                            <Button
                                color="primary"
                                onClick={() => {
                                    history.push(`/zemelapis`)
                                }}
                            >{TEXT.MAIN_PAGE.WELCOME_BOX.BUTTON}</Button>
                        )}/>
                    </p>
                </div>
            </div>
        </Jumbotron>
    </div>
);

export default welcomeBox;