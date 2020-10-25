import React from "react"
//import {Card} from "react-bootstrap"
//import { AccountAccess } from "./accountPage/AccountAccess"
import { firebaseAppAuth } from "../firebase/firebaseConfig";
import withFirebaseAuth from "react-with-firebase-auth";
import Navigate from "./Nav"
import CategoryCard from "./CategoryCard"
//import { loadVocab } from "../redux/util"
import store from "../redux/store"
import '../style.css'

class Front extends React.Component {

    

    render (){
        store.dispatch({type:"SET_LANGUAGE", lang: "kor"})
        //let curr_state = store.getState();
        

        return (
            <div style={{height: '100vh', width: '100vw'}}>
                
                <Navigate />
                <CategoryCard />
            </div> 
        );
    }
}

export default withFirebaseAuth({firebaseAppAuth,})(Front);