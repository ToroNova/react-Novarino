//RAFC

import React from 'react'
import './NavBar.css'
import {CartWidget} from './CartWidget'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const NavBar = ({logo}) => {
    return (
        <header>            
           <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home" className="brand">{logo}</Navbar.Brand>
            <Nav className="me-auto m-3">
                
            <NavLink className ="nav-link" exact to ='/'> Home </NavLink>
            <NavLink className ="nav-link" exact to ='/productos/remeras'> Hamburguesas </NavLink>
            <NavLink className ="nav-link" exact to ='/productos/zapatos'> Panchos </NavLink>
            <NavLink className ="nav-link" exact to ='/contacto'> Contacto </NavLink>
            <NavLink className ="nav-link" exact to ='/cart'> <CartWidget/> </NavLink>
                                
            </Nav>
            </Container>
            </Navbar>
        
  
        </header>
    )
}
