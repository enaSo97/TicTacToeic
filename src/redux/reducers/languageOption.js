import {SET_LANGUAGE} from "../actionTypes"


const languageOption = ( state = null, action ) => {
    switch (action.type) {
        case SET_LANGUAGE :
            return {
                ...state,
                lang : action.lang
            };
        default : {
            return state;
        }
    }
};

export default languageOption;