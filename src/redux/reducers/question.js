import { SET_QUESTION } from "../actionTypes";

const initialState = {
    vocabId : 0,
    correct : false
}
//
export default function (state="", action) {
    let newState;
    switch (action.type) {
        case SET_QUESTION:
            newState = {
                "lang" : action.lang,
                "word" : action.word,
                "question" : action.question 
            }
            console.log("new state =  " + JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
};