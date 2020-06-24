import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Form, Button, Card } from "react-bootstrap";
import { setQuestion } from "../redux/actions"
import store from "../redux/store"

const questionCard = (props) => {
    store.dispatch({type: "SET_QUESTION", vocabId: 12});
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
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        </div>
    );
}

export default questionCard;