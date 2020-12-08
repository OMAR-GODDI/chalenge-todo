import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CardContainer, { User } from '../Components/CardContainer';




export default function AppRouter() {
    return (
    <Router>
    <Switch>
    <Route exact path="/" component={CardContainer}/>
    <Route exact path="/description/:id" component={User}/>
    </Switch>
    </Router>
    )
}