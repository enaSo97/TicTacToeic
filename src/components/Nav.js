import React from "react"
import {Navbar,
        Nav,
        Form,
        Button} from "react-bootstrap"
import { firebaseAppAuth } from "../firebase/firebaseConfig";
import withFirebaseAuth from "react-with-firebase-auth";
import { AccountAccess } from "./accountPage/AccountAccess"

export const Navigate = () =>{
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Navbar </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <div className="mr-sm-2" >
                <AccountAccess />
            </div>
        </Navbar>
    );
}


export default withFirebaseAuth({firebaseAppAuth,})(Navigate);