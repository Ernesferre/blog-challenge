import React from 'react'
import { Redirect, Switch, Route } from 'react-router';
import DetailScreen from '../components/DetailScreen';
import EditScreen from '../components/EditScreen';
import FormScreen from '../components/FormScreen';
import HomeScreen from '../components/HomeScreen';
import Navbar from '../components/Navbar';


const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            
            <div>
                <Switch>

                    <Route exact path="/home" component={ HomeScreen } />

                    <Route exact path="/form" component={ FormScreen } />

                    <Route exact path="/detail" component={ DetailScreen } />

                    <Route exact path="/edit" component={ EditScreen } />

                    <Redirect to="/home" />

                </Switch>

            </div>

            
        </>
    )
}

export default DashboardRoutes
