import { SET_QUESTION } from "../actionTypes";

const initialState = {
    vocabId : 0,
    correct : false
}
//
export default function (state=initialState, action) {

    switch (action.type) {
        case SET_QUESTION:
            const { vocabId, correct } = action;
            console.log("action " + JSON.stringify(action));
            return {
                ...state,
                vocabId : vocabId,
                correct : correct
            };
        default:
            return state;
    }
};