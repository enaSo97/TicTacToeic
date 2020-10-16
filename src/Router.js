import React from "react"
import Front from "./components/Front"
import  QuestionCard  from "./components/QuestionBox"
import { BrowserRouter as Switch, Route } from "react-router-dom";

import SignIn from "./components/accountPage/SignIn";
import SignUp from "./components/accountPage/SignUp";
const Router = () =>(
    <Switch>
        <Route exact path="/">
            <Front />
        </Route> 
        <Route path="/questionCardpage"> <QuestionCard /> </Route>
        <Route path="/signIn"> <SignIn /> </Route>
        <Route path="/signUp"> <SignUp /> </Route>
            
    </Switch>  
)

export default Router;