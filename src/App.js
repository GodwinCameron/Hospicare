import React from "react";
import Dash from "./components/Dash";
import Nav from "./components/Nav";
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";

function App() {
  return (
    <>
    <Row>
    <Nav />
    <Dash />
    </Row>
    {/* <Login/> */}
    </>
  );
}

export default App;
