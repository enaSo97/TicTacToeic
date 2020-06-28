import { database } from "./firebaseConfig";
//import store from "../redux/reducers/store";

export function getDatabaseObj(object, callback){
    let ref = database().ref(object);
    ref.once("value").then((snapshot) => {
        callback(snapshot.val());
    })
}

export function getVocabById(id, callback){
    //console.log(database);
    let vocab;
    let ref = database().ref('/voabulary/'+id);
    ref.once("value").then((snapshot) => {
        //console.log("database : " + JSON.stringify(snapshot.val()));
        //vocab = snapshot.val();
        callback(snapshot.val())
    })
}