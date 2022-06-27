import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const DashAppointSumItem = () =>{

    return(<div className="dash-appointment-summary-item">
    <Row>
        <Col md={2}>
            <div className="dash-appointment-time">
                Time:
                <br/>
                10 AM
            </div>
        </Col>
        <Col md={2}>
            <div className="dash-appointment-time">
                Name:
                <br/>
                Jake
            </div>
        </Col>
        <Col md={2}>
            <div className="dash-appointment-time">
                Age:
                <br/>
                24
            </div>
        </Col>
        <Col md={3}>
            <div className="dash-appointment-time">
                Affliction:
                <br/>
                Limb Trauma
                <br/>
                <br/>
                Condition: Stable
            </div>
        </Col>
        <Col md={2}>
            <div className="dash-appointment-time">
                Room:
                <br/>
                C4
            </div>
        </Col>
        <Col md={1}>
            <div className="delete-icon"></div>
        </Col>
    </Row>
</div>)
}

export default DashAppointSumItem;