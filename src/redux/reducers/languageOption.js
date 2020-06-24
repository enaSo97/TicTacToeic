import {SET_LANGUAGE} from "../actionTypes"
import {LANGUAGES} from "../../constants.js"

const initial_state = LANGUAGES.KOR;

const languageOption = ( state = initial_state, action ) => {
    switch (action.type) {
        case SET_LANGUAGE :
            return action.payload.language;
        default : {
            return state;
        }
    }
};

export default languageOption;