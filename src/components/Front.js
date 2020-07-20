import React from "react"
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap"
import { loadVocab } from "../redux/util"
import store from "../redux/store"


const Front = () => {

    store.dispatch({type:"SET_LANGUAGE", lang: "kor"})
    let curr_state = store.getState();

    return (
        <div className="mt-5">
            <h1> Welcome to TicTacToeic!</h1>
            <Link to="/questionCardpage">
                <Button variant="danger" onClick={loadVocab(curr_state.lang, 0)} >Start Lesson!</Button>
            </Link>
        </div> 
    );
}

export default Front;