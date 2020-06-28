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
        if (store.)
        store.dispatch({
            type: "SET_QUESTION",
            vocab: vocab.map(())
        })
    })
}

const mapStateToProp = state => {
    //console.log("current state" + JSON.stringify(state.visibilityFilter));
    return { lang : state.lang };
}

export default connect(mapStateToProp, id)(loadVocab)