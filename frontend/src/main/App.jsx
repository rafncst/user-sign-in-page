import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";

import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Footer from "../components/template/Footer";
import Nav from "../components/template/Nav";
import Logo from "../components/template/Logo";

export default (props) => (
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
);
