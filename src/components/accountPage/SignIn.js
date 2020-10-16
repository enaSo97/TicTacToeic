import React, { useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import { firebaseAppAuth } from "../../firebase/firebaseConfig";
import {Form, Button} from "react-bootstrap"
import store from "../../redux/store"
import {useLocation, Link} from "react-router-dom"
import {
    pageFrame
} from "./SignInUp";
//import { Redirect } from "react-router-dom";

const SignIn = (props) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return pageFrame(
        <div style={{position: "absolute",top: "50%", transform:"translateY(-50%)", margin:"auto"}}>    
            <Form >
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>
                    <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control 
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}/>
                </Form.Group>
            </Form>
            <Button   
                    variant="danger" 
                    onClick={(e)=>{
                        e.preventDefault();
                        firebaseAppAuth.signInWithEmailAndPassword(email,password)
                        .then((e)=>{
                            alert("logged in")
                            
                        }).catch((e)=>{
                            store.dispatch({type:"ERROR", error:e.message})
                        })
                }}>
                Sign in
            </Button>
           Don't have an account? <Link to="signUp">Sign up</Link>
             
        </div>
        );
}

export default withFirebaseAuth({
    firebaseAppAuth,
})(SignIn);