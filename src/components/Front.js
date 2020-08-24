import React from "react"
import {Card} from "react-bootstrap"
import { AccountAccess } from "./accountPage/AccountAccess"
import { firebaseAppAuth } from "../firebase/firebaseConfig";
import withFirebaseAuth from "react-with-firebase-auth";

import { loadVocab } from "../redux/util"
import store from "../redux/store"
import '../style.css'

class Front extends React.Component {
    constructor(props){
        super(props)
    }



    render (){
        store.dispatch({type:"SET_LANGUAGE", lang: "kor"})
        let curr_state = store.getState();

        return (
            <div className="mt-5" style={{height: '100vh', width: '100vw'}}>
                <h1 className="frontPage" style={{marginLeft:'2rem'}}> Hello, there!</h1>
                <div className="w-50 h-50 p-3 mx-auto my-auto">
                    <Card style={{ width: '100%', height: '100%', borderRadius:'15px', opacity: '70%' }} className="my-5 mx-auto bg-warning">
                        <Card.Body>
                        <Card.Text  className="frontCardText">Welcom To TicTacToeic! :)  </Card.Text>
                        </Card.Body>
                    </Card>
                    <div style={{textAlign:"center"}}>
                        <AccountAccess />
                    </div>
                </div>
                
            </div> 
        );
    }
}
/*
export const Front = () => {

    
    //console.log("window height : " + window.innerHeight)
    //pushVocabToDatabaseFromJSON();
}*/

export default withFirebaseAuth({firebaseAppAuth,})(Front);