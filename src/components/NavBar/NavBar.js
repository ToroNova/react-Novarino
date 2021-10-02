//RAFC

import React from 'react'
import './NavBar.css'
import {CartWidget} from './CartWidget'
import {Navbar,Container,Nav} from 'react-bootstrap'

export const NavBar = ({logo}) => {
    return (
        <header>            
            <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home" className="brand">{logo}</Navbar.Brand>
                <Nav className="me-auto m-3">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <CartWidget/>
                </Nav>
                </Container>
            </Navbar>

            </>
        
  
        </header>
    )
}
