import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  Link,
} from "react-router-dom";

export default function Sidebar() {
    return (
        <Navbar className="bg-light" >
            <Nav defaultActiveKey="/" className="flex-column sidebar-sticky">
                <Link to="/home"><Nav.Link href="/home">Inicio</Nav.Link></Link>
                <Link to="/search"><Nav.Link href="/search">Search</Nav.Link></Link>
                <Link to="/upload"><Nav.Link href="/upload">Subir Archivo</Nav.Link></Link>
                <Link to="/files"><Nav.Link href="/files">Lista de Nombres de Archivos</Nav.Link></Link>
            </Nav>
        </Navbar>
    )
}
