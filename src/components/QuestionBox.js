import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import { loadVocab } from "../redux/util";
import { getVocabById } from "../database/database"
import store from "../redux/store"

var currentVocab;

const questionCard = ({setVocabQuestion}) => {
    store.dispatch({type:"SET_LANGUAGE", lang: "kor"})
    //store.dispatch({type: "SET_QUESTION", vocabId: 0, correct:false});
    let qeustionState = setVocabQuestion(0)
    const curr_state = store.getState();
    //console.log(qeustionState);
    //console.log("wawawa");
    getVocabById(0, (vocabObj) => {
        //currentVocab = vocabObj;

        console.log("curr vocab : " + JSON.stringify(vocabObj));
    });
    return (
        <div className="mt-5">
        <Card style={{ width: '50rem'}} className="mb-3 mx-auto">
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">AntoggleTodoother Link</Card.Link>
            </Card.Body>
        </Card>
        </div>
    );
}

export default questionCard;