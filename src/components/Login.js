import React from "react";
import { Col, Row } from "react-bootstrap";

const Login = () => {

    const login = (e) =>{
        e.preventDefault();
    }

    return (<>
        <Row>
            <Col md={4}></Col>
            <Col>
            <div className="hospi-logo"></div>
                <div className="login-form">
                    <h2 className="welcome">Welcome Back to Hospicare!</h2>
                    <form>
                        <input className="login-username" placeholder="Username"></input>
                        <input className="login-password" placeholder="Password" type={"password"}></input>
                        <br/>
                        <button className="login-button" onClick={login}>Login</button>
                    </form>
                </div>
            </Col>
            <Col md={4}></Col>
        </Row>
    </>)
}
export default Login;