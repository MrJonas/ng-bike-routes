import React from 'react';
import Footer from './../../components/footer';

class About extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <div className="container" style={{minHeight: 'calc(100vh - 200px)'}}>
                        <div className="row py-lg-4">
                            <div className="row py-lg-4">
                                <div className="card w-100">
                                    <div className="card-block">
                                        <h4 className="card-title text-left">Autoriai</h4>
                                        <div>
                                            <img src="/autoriai.jpg" alt="Dviračių maršrutų autoriai"
                                                 className="my-4 img-authors"/>
                                        </div>
                                        <p className="lead">Mes esame Ieva ir Jonas. Gražiu oru mėgstame dviračiais
                                            važinėtis po Lietuvą.</p>
                                        <p className="lead">Šiame bloge rasite visus mūsų išbandytus maršrutus.</p>
                                        <p className="lead">
                                            Mes esame ne dviračių sporto, o labiau poilsio dviračiais entuziastai.
                                            Todėl siūlomi maršrutai yra skirti pradedantiesiems arba vidutiniokams.
                                            Tačiau idėjų savo žygiams pasisems ir labiau patyrę.
                                        </p>
                                        <p className="lead">Linkime smagių kelionių!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default About;


