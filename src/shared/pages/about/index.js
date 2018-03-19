import React from 'react';
import Footer from './../../components/footer';
import TEXT from './../../text';

const About = (props) => (
    <div>
        <div className="container min-page-heigth">
            <div className="row py-lg-5">
                <div className="card w-100">
                    <div className="card-block">
                        <h4 className="card-title text-left">{TEXT.ABOUT_PAGE.TITLE}</h4>
                        <div>
                            <img src="/autoriai.jpg"
                                 alt={TEXT.ABOUT_PAGE.IMAGE_ALT}
                                 className="my-4 img-authors"/>
                        </div>
                        {TEXT.ABOUT_PAGE.PARAGRAPHS.map((text, i) => <p key={i} className="lead">{text}</p>)}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
);

export default About;


