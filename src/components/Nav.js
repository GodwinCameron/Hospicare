import React from "react";
import { Col, Row } from "react-bootstrap";

const Nav = () => {
    return (<>
        <Row>
            <Col md={1} className="nav-main-div">
                <div className="nav-logo"></div>
                <div className="nav-item-separator"></div>
                <div className="nav-item nav-dash" id="navDashIcon"></div>
                <div className="nav-item nav-tasks" id="navTasksIcon"></div>
                <div className="nav-item nav-cal" id="navCalIcon"></div>
                <div className="nav-item nav-appoint" id="navppointIcon"></div>

            </Col>
        </Row>
    </>)
}

export default Nav;