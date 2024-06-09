import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import UsersEdit from "./views/users/edit";
import UsersView from "./views/users/show";
import UserList from "./views/users/index";
import UserAdd from "./views/users/create";

import Home from "./views/Home";
import Search from "./views/Search";
import Upload from "./views/Upload";
import Ejemplo from "./views/Ejemplo";

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
                <Route path="/users/create">
                  <UserAdd />
                </Route>

                <Route path="/users/:id/edit">
                  <UsersEdit />
                </Route>

                <Route path="/users/:id">
                  <UsersView />
                </Route>

                <Route path="/users">
                  <UserList />
                </Route>

                <Route path="/home">
                  <Home />
                </Route>

                <Route path="/upload">
                  <Upload />
                </Route>

                <Route path="/archivoDicom/:number"> {/* Cambio aquí para incluir el número del archivo */}
                  <Ejemplo />
                </Route>

                <Route path="/search"> {/* Cambio aquí para incluir la vista Search */}
                  <Search />
                </Route>

                <Route exact path="/"> {/* Esta debe ir al final o hará coincidencia antes */}
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
