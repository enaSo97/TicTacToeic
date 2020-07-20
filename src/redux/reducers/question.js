import { SET_QUESTION } from "../actionTypes";

const initialState = {
    vocabId : 0,
    correct : false
}
//
export default function (state=initialState, action) {

    switch (action.type) {
        case SET_QUESTION:
            console.log("action " + JSON.stringify(action));
        default:
            return state;
    }
};