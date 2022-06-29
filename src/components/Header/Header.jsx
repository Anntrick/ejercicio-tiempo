import React from "react";
import { NavLink, Link } from "react-router-dom"
import "./Header.scss"
import Nav from 'react-bootstrap/Nav';

const Header = props => {
    /*<div className="Header">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/tiempo">El tiempo</NavLink>
</div>*/
    return (
        <Nav activeKey="/">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/tiempo">El tiempo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Header 