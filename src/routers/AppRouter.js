import React from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { Navbar } from '../components/Navbar';


const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
    
                <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
