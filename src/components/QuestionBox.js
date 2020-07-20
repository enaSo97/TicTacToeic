import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import store from "../redux/store"
import { loadVocab } from "../redux/util"

var currentVocab;

const QuestionCard = () => {
    let curr_state = store.getState();
    //loadVocab(curr_state.lang, 0)
    //console.log("statee = " + JSON.stringify(store.getState()));
    return (
        <div className="mt-5">
        <Card style={{ width: '50rem'}} className="mb-3 mx-auto">
            <Card.Body>
            <Card.Title>{curr_state.question.eng}</Card.Title>
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



export default QuestionCard;