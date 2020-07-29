import React from "react"
import Front from "./components/Front"
import  QuestionCard  from "./components/QuestionBox"
import { BrowserRouter as Switch, Route } from "react-router-dom";
const Router = () =>(
    <Switch>
        <Route exact path="/">
            <Front />
        </Route> 
        <Route path="/questionCardpage">
            <QuestionCard />
        </Route>
        <Route path="/signInOut">
            
        </Route>
    </Switch>  
)

export default Router;