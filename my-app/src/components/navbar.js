import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

export default function Header({ onChange }) {

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Movie Roster</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Discover" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#Popular">Popular</NavDropdown.Item>
                        <NavDropdown.Item href="#Trending">Trending</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Your lists" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#Favorites">Favorites</NavDropdown.Item>
                        <NavDropdown.Item href="#Watched">Watched</NavDropdown.Item>
                        <NavDropdown.Item href="#Watch later">Watch later</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Explore Movies" className="mr-sm-2 filter" onChange={({ target }) => onChange(target.value || 'Movie Roster')} />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}