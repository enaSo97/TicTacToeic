import store from "./reducers/store"
import {vocabDB} from "../../objects"
import { getDatabaseObj, getVocabById } from "../database/database"

export function getVocabDB(){
    let vocab = {}
    getDatabaseObj('vocabulary', vocab)
    return vocab;
}

export function loadVocab(id){
    getVocabById(id, (vocab) => {
        store.dispatch({
            vocab : vocab.id,
            correct : false
        })
    })
}