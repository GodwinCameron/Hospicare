import Dash from "./components/Dash";
import Nav from "./components/Nav";
import { Container, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Row>
        <Nav />
        <Dash />
      </Row>
  );
}

export default App;
