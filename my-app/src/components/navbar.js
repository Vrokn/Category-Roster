import React from "react";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

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
                    {/* <Button variant="outline-success"><svg class="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd" />
                    </svg></Button> */}
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}