import React from "react";
import { Col, Row } from "react-bootstrap";
import DashAppointSumItem from "./DashAppointSumItem";

const Dash = () => {
    return (<>
        <Col md={11} className="dash-main-div">
            <div className="dash-left-col">
                <h1>Welcome Back Dr. !</h1>
                <h6>Let's see what your day looks like...</h6>
                <Row>
                    <Col md={8} className="dash-appointments-summary">
                        <DashAppointSumItem />
                        <div className="dash-appointment-summary-item"></div>
                        <div className="dash-appointment-summary-item"></div>
                        <div className="dash-appointment-summary-item"></div>
                        <div className="dash-appointment-summary-item"></div>
                        <div className="dash-appointment-summary-item"></div>
                    </Col>
                    <Col className="dash-breakdown">
                        <h4>Breakdown of July</h4>
                        <div className="chart"></div>
                        <div className="dash-breakdown-info"></div>
                    </Col>
                </Row>

                <Row>
                    <h4>Schedule:</h4>
                    <Col md={6} className="dash-schedule-week"></Col>
                    <Col md={1}></Col>
                    <Col className="dash-schedule-month"></Col>
                </Row>
            </div> {/*Left Col end*/}


            <div className="dash-right-col-background">
                <div className="dash-right-col">
                    <div className="dash-menu-icon-holder">
                        <div className="dash-icons dash-to-profile-menu-icon"></div>
                        <div className="dash-icons dash-settings-icon"></div>
                    </div>
                    <div className="rank"></div>
                    <div className="dash-profile-pic"></div>
                    <h2>Dr. DJ Cat</h2>
                    <h5>Surgeon</h5>
                    <div className="dash-see-profile">
                        <p>See Profile</p>
                    </div>
                    <h5>Working Hours:</h5>
                    <div className="dash-hours">
                        <div className="dash-working-hours-start">
                            <p>Work Start</p>
                            <p1>09:00 AM</p1>
                        </div>
                        <div className="dash-working-hours-end">
                            <p>Work End</p>
                            <p1>05:00 PM</p1>
                        </div>
                    </div>
                    <h1>Centurion, Pretoria</h1>
                    <h5>South Africa, 22°C <br></br>June 4 Sat.<br></br>14:32</h5>
                </div>
            </div> {/*Right Col end*/}
        </Col>
    </>)
}

export default Dash;