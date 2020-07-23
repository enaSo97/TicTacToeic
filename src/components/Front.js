import React from "react"
import { Link } from "react-router-dom";
import {Button, Card} from "react-bootstrap"
import { loadVocab } from "../redux/util"
import store from "../redux/store"
import '../index.css'

const Front = () => {

    store.dispatch({type:"SET_LANGUAGE", lang: "kor"})
    let curr_state = store.getState();
    //pushVocabToDatabaseFromJSON();
    return (
        <div className="mt-5">
            <h1 className="frontPage" style={{marginLeft:'2rem'}}> Hello, there!</h1>
            <div >
                <Card style={{ width: '50%', height: '18rem', borderRadius:'15px', opacity: '70%'}} className="my-5 mx-auto bg-primary">
                    <Card.Body>
                    <Card.Text  style={{ paddingTop: '6rem', fontSize: '35px 25.5vw' , color:'white', fontFamily:'Roboto Slab', fontWeight:'bold', paddingLeft: '8em'}} className='mx-auto'>Welcom To <br /> <span style={{marginLeft: "5em"}}>TicTacToeic! :)</span>  </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Link to="/questionCardpage">
                <Button variant="danger" onClick={loadVocab(curr_state.lang, 0)} >Start Lesson!</Button>
            </Link>
        </div> 
    );
}

export default Front;