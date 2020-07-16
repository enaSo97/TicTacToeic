import store from "./reducers/store"
import {vocabDB} from "../../objects"
import { getDatabaseObj, getVocabById } from "../database/database"
import {LANGUAGES} from "../../constants.js"

var questionID = 0;
export function getVocabDB(){
    let vocab = {}
    getDatabaseObj('vocabulary', vocab)
    return vocab;
}

export function setLangID(langState){
    if (langState == LANGUAGES.KOR){
        return 0;
    }
    else if (langState == LANGUAGES.ENG){
        return 1;
    }
}

export function loadVocab(langState, id){
    var langId = setLangID(langState);
    getVocabById(id, (vocab) => {
        store.dispatch({
            type: "SET_QUESTION",
            word: vocab.word,
            question: vocab.questions[questionID++],
            answer: vocab.definition[langId],
        })
    })
}