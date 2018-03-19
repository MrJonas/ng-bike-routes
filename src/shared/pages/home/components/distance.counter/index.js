import React from 'react';
import TEXT from "../../../../text";

class DistanceCounter extends React.Component {

    constructor() {
        super();
        this.state = {stats: null};
    }

    componentDidMount() {
        fetch("/api/route/stats")
            .then(res => res.json())
            .then(res => this.setStats(res))
            .catch(e => console.log(e));
    }

    setStats(stats) {
        this.setState({stats});
    }

    render() {
        if (this.state.stats) {
            return (
                <div className="container-fluid no-padding">
                    <div className="counter-box p-5 text-center">
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-12 text-center mb-3">
                                    <h3><b>{TEXT.MAIN_PAGE.STATS_BOX.TITLE}</b></h3>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-md-3">
                                    <i className="fa fa-map-signs fa-4x" aria-hidden="true"></i><br/><br/>
                                    <h4>{`${this.state.stats.count} ${TEXT.MAIN_PAGE.STATS_BOX.STATS.ROUTES_COUNT}`}</h4>
                                </div>
                                <div className="col-md-3">
                                    <i className="fa fa-road fa-4x" aria-hidden="true"></i><br/><br/>
                                    <h4>{`${this.state.stats.distance} ${TEXT.MAIN_PAGE.STATS_BOX.STATS.TOTAL_DISTANCE}`}</h4>
                                </div>
                                <div className="col-md-3">
                                    <i className="fa fa-camera-retro fa-4x" aria-hidden="true"></i><br/><br/>
                                    <h4>{`${this.state.stats.atractions} ${TEXT.MAIN_PAGE.STATS_BOX.STATS.ATTRACTION_COUNT}`}</h4>
                                </div>
                                <div className="col-md-3">
                                    <i className="fa fa-users fa-4x" aria-hidden="true"></i><br/><br/>
                                    <h4>{TEXT.MAIN_PAGE.STATS_BOX.STATS.NUMBER_OF_AUTHORS}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

}
;

export default DistanceCounter;


