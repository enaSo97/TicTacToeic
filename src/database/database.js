import { database } from "./firebaseConfig";
import store from "../redux/reducers/store";

export function getDatabaseObj(object, callback){
    let ref = database().ref(object);
    ref.once("value").then((snapshot) => {
        callback(snapshot.val());
    })
}

export function getVocabById(id, callback){
    var ref = database().ref('vocabulary').orderByChild("id").equalTo(id);
    ref.once("value").then((snapshot) => {
        callback(snapshot.val());
    })
}