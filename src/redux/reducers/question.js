import { SET_QUESTION } from "../actionTypes";


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
        case "SIGN_IN":
            newState = {
                ...state,
                "auth" : action.auth
            }
        default:
            return state;
    }
};