import React from "react"
import { Link } from "react-router-dom";
import {Button, Card} from "react-bootstrap"
import { loadVocab } from "../redux/util"
import store from "../redux/store"
import '../style.css'

export const Front = () => {

    store.dispatch({type:"SET_LANGUAGE", lang: "kor"})
    let curr_state = store.getState();
    console.log("window height : " + window.innerHeight)
    //pushVocabToDatabaseFromJSON();
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
                    <Link to="/questionCardpage">
                        <Button   variant="danger" onClick={loadVocab(curr_state.lang, 0)} >Sign in</Button>
                        <span style={{margin: '1.5%'}}></span>
                        <Button   variant="primary" >Sign up</Button>
                    </Link>
                </div>
            </div>
            
        </div> 
    );
}

export default Front;