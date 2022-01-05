import React from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "./components/Jumbotron";
import Router from "./components/Router";

const App = () => (
  <Container fluid>
    <Jumbotron />
    <Container>
      <Router />
    </Container>
  </Container>
);

export default App;
