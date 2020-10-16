import React, { useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import { firebaseAppAuth } from "../../firebase/firebaseConfig";
import {Form, Button} from "react-bootstrap"
import store from "../../redux/store"
//import {useLocation, Link} from "react-router-dom"
import { database } from "../../firebase/firebaseConfig";
import {
    pageFrame
} from "./SignInUp";
//import { Redirect } from "react-router-dom";

const SignUp = (props) =>{
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    //let pageName = useLocation().pathname;
    return pageFrame(
        <div style={{position: "absolute",top: "50%", transform:"translateY(-50%)", margin:"auto"}}>    
            <Form >
                <Form.Group controlId="formBasicUsername">
                    <Form.Control 
                        type="email"
                        value={email} 
                        placeholder="Enter username"
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>
                    <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
                </Form.Group>

                <Form.Group controlId="fromNickjame">
                    <Form.Control
                        type="text"
                        placeholder="Enter nickname"
                        value={name}
                        onChange={(e) =>{
                            setName(e.target.value)
                        }}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control 
                        type="password"
                        value={password} 
                        placeholder="Enter Password"
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}></Form.Control>
                </Form.Group>
            </Form>
            <Button   
                    variant="danger" 
                    onClick={() =>{
                        firebaseAppAuth.createUserWithEmailAndPassword(email,password)
                        .then((user) => {
                            console.log(JSON.stringify(user))
                            let account = {}
                            let updatedUser= {}
                            account.email = email
                            account.uid = user.user.uid
                            account.username = name
                            console.log("uid" + user.user.uid)
                            
                            database().ref('/users/' + account.uid).set({account})
                            .then(()=>{
                                database().ref('/users/'+account.uid).once('value').then(function (snapshot){
                                    updatedUser = snapshot.val();
                                    console.log(JSON.stringify(updatedUser))
                                }).then(()=>{
                                    store.dispatch({type:"NEW_USER",newUser:updatedUser})
                                })
                                .catch((e) =>{
                                    store.dispatch({type:"ERROR", error: e.message});
                                })
                            })
                        })
                        .catch((e) =>{
                            store.dispatch({type:"ERROR", error: e.message});
                        })
                    }}


                >
                Sign up
            </Button>
        </div>
        );
}

export default withFirebaseAuth({
    firebaseAppAuth,
})(SignUp);