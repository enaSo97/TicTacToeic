import React from 'react'
import {Button, Card, Form} from "react-bootstrap"
import officeImage from "../../objects/officeChat.png"
import { firebaseAppAuth } from "../../firebase/firebaseConfig";
import withFirebaseAuth from "react-with-firebase-auth";
import {useLocation, Link} from "react-router-dom"
import store from "../../redux/store"

export const AccountAccess = (props) => {
    let pageName = useLocation().pathname;

    function displayCorrespondingLink(jsxElement){
        return props.user ? (
            jsxElement
        ) : (
        <Link to={pageName === "signIn" ? "nothing" : "signIn"}>{jsxElement}</Link>
        );
    }
    return displayCorrespondingLink(
            <div>
                <Button   
                    variant="danger" 
                    onClick={
                        store.dispatch({
                            type: "UPDATE_MAINPAGE",
                            page: pageName
                        })
                }>
                {props.user ? "Logout" : "Signin/Signup"}
                </Button>
            </div>
    );

    
}

export const SignInOption = () =>{
    return (
        <div style={{ float: "right", width: "50%", height: '100%' }}>
            <div>
                <Form >
                    <Form.Group controlId="formBasicUsername">
                        <Form.Control type="text" placeholder="Enter username"></Form.Control>
                        <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Enter Password"></Form.Control>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );

}


export default withFirebaseAuth({firebaseAppAuth,}) (AccountAccess);