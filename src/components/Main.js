import { Route, Switch, Routes, Link, Redirect } from "react-router-dom";


import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

import React from 'react'


const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
            </Switch>
        </div>
    )
}


export default Main;