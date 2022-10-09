
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import DashAppointSumItem from "./DashAppointmentSumItem";
import TestComponent from "./TestComponent/TestComponent";

const Dash = () => {
    return (<>
        <Col md={11}>
            <h6>Let's see what your day looks like...</h6>
            <Row>
                <Col md={9} className="dash-appointments-summary">
                    <DashAppointSumItem />
                    {/* <DashAppointSumItem /> */}
                    {/* <DashAppointSumItem /> */}
                    {/* <DashAppointSumItem /> */}
                    {/* <div className="dash-appointment-summary-item"></div>
                    <div className="dash-appointment-summary-item"></div> */}
                    <div className="dash-appointment-summary-item-add"></div>
                </Col>

                <Col md={3}>
                    <div className="dash-right-col-background">
                        <div className="dash-icons dash-to-profile-menu-icon"></div>
                        <div className="dash-icons dash-settings-icon"></div>
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
                </Col>
            </Row> {/*Right Col end*/}
        </Col >

    </>)
}

export default Dash;