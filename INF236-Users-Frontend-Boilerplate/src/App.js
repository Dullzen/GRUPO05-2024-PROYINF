import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Home from "./views/Home";
import Search from "./views/Search";
import Upload from "./views/Upload";
import Ejemplo from "./views/Ejemplo";
import FileList from "./views/FileList";  // Nueva importación

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Container fluid className="p-0">
          <Row className="no-gutters">
            <Col xs="2">
              <Sidebar />
            </Col>
            <Col xs="10">
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>

                <Route path="/upload">
                  <Upload />
                </Route>

                <Route path="/archivoDicom/:number">
                  <Ejemplo />
                </Route>

                <Route path="/search">
                  <Search />
                </Route>

                <Route path="/files">
                  <FileList />
                </Route>

                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}
