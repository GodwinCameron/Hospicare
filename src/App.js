import React from "react";
import Dash from "./components/Dash";
import Nav from "./components/Nav";
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import FlatLineComponent from "./components/FlatLineComponent/FlatLineComponent"
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import PatientRoute from "./Routes/Patients/Patient.route";
import styles from "./Styling/styles.scss";
import LandingRoute from "./Routes/Landing/Landing.route";
import Admin from "./Routes/Admin/Admin.route";



function App() {
  const location = useLocation();

  return (
    <>
      {/* <div className="bodyBlock"> */}
      {/* <FlatLineComponent /> */}
      {/* <Row> */}
      {/* <Nav /> */}
      {/* <Dash /> */}
      {/* </Row> */}
      {/* <Login/> */}
      {/* </div> */}


      <Routes location={location}>
        <Route path="/patients" element={<PatientRoute />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<LandingRoute />} />
      </Routes>
      <Outlet/>
    </>
  );
}

export default App;
