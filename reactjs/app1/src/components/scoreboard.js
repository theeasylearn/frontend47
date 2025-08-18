import React from "react";
export default class Scoreboard extends React.Component {
    render() {
        return (<div className="container mt-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card text-center">
                        <div className="card-header bg-primary text-white">
                            <h2>Virat Kohli</h2>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Match Statistics</h5>
                            <p className="card-text"><strong>Runs:</strong> 100</p>
                            <p className="card-text"><strong>Balls:</strong> 20</p>
                            <p className="card-text"><strong>Strike Rate:</strong> 100</p>
                            <hr />
                            <h6 className="card-subtitle mb-2 text-muted">Runs per Over</h6>
                            <div className="row">
                                <div className="col-2 border"><button type="button" className="btn w-100 btn-primary fs-5">0 X <span className="badge bg-warning text-dark">0</span></button></div>
                                <div className="col-2 border"><button type="button" className="btn w-100 btn-primary fs-5">1 X <span className="badge bg-warning text-dark">0</span></button></div>
                                <div className="col-2 border"><button type="button" className="btn w-100 btn-primary fs-5">2 X <span className="badge bg-warning text-dark">0</span></button></div>
                                <div className="col-2 border"><button type="button" className="btn w-100 btn-primary fs-5">3 X <span className="badge bg-warning text-dark">0</span></button></div>
                                <div className="col-2 border"><button type="button" className="btn w-100 btn-primary fs-5">4 X <span className="badge bg-warning text-dark">0</span></button></div>
                                <div className="col-2 border"><button type="button" className="btn w-100 btn-primary fs-5">5 X <span className="badge bg-warning text-dark">0</span></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}