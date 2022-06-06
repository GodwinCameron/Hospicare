import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Dash = () => {
    return (<>
        <Col md={11} className="dash-main-div">
            <div className="dash-left-col">
                <h1>Welcome Back Dr. !</h1>
                <h6>Let's see what your day looks like...</h6>
                <Row>
                    <Col md={8} className="dash-appointments-summary">
                        <div className="dash-appointment-summary-item"></div>
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

            <div className="dash-right-col">
                <div className="dash-menu-icon-holder">
                    <div className="dash-icons dash-to-profile-menu-icon"></div>
                    <div className="dash-icons dash-settings-icon"></div>
                </div>
                <div className="dash-profile-pic"></div>
            </div> {/*Right Col end*/}
        </Col>
    </>)
}

export default Dash;