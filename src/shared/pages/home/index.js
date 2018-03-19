import React from 'react';
import Footer from './../../components/footer';
import WelcomeBox from "./components/welcome.box";
import DistanceCounter from "./components/distance.counter";
import LatestRoutes from "./components/latest.routes";

const Home = (props) => (
    <div>
        <div className="page-layout">
            <WelcomeBox/>
            <LatestRoutes/>
            <DistanceCounter/>
        </div>
        <Footer/>
    </div>
);

export default Home;


