import "./Nav.css";
import NavItem from "../NavItem.jsx";
import React from "react";

export default (props) => (
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" title="Home" />
            <NavItem icon="users" title="Users" />
        </nav>
    </aside>
);
