import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';


function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container >
                <NavLink to='/' className='navbar-brand'>React-Bootstrap</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* link to = <a href=""></a> mà xài như v nó có cái event.preventDefual */}
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/admins" className='nav-link'>Admin</NavLink>
                        <NavLink to="/users" className='nav-link'>User</NavLink>
                        {/*  */}

                    </Nav>
                    <Nav>
                        <NavDropdown title="Setting" id="collapsible-nav-dropdown">
                            <NavDropdown.Item >Log In</NavDropdown.Item>
                            <NavDropdown.Item >
                                Log Out
                            </NavDropdown.Item>
                            <NavDropdown.Item >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;