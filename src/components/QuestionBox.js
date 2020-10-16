import React from "react";
import { Card, InputGroup, Button, FormControl } from "react-bootstrap";
import store from "../redux/store"
import { setLangID } from "../redux/util"
import {LANGUAGES} from "../constants.js"

const QuestionCard = () => {
    let curr_state = store.getState();
    let langID = setLangID(curr_state.languageOption["lang"]);
    let curr_lang;
    //loadVocab(curr_state.lang, 0)
    
    if (langID===0){
        curr_lang = LANGUAGES.KOR }
    else if (langID===1){
        curr_lang = LANGUAGES.ENG
    }
    
    console.log("statee = " + JSON.stringify(curr_state));
    return (
        <div className="mt-5">
        <Card style={{ width: '50rem', borderRadius: '15px'}} className="mb-3 mx-auto">
            <Card.Body>
            <Card.Title>{curr_state.question["question"][curr_lang]}</Card.Title>
            <Card.Subtitle className="mb-2">{curr_state.question["word"]}</Card.Subtitle>
            <Card.Text></Card.Text>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Enter your answer here :) "
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
            <InputGroup.Append>
                <Button variant=" outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
            </Card.Body>
        </Card>
        </div>
    );
}



export default QuestionCard;