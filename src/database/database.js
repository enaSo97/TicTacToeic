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

export function pushVocabToDatabaseFromJSON(filename){
    var jsonObj = require("../objects/corporateLife_eng.json")
    let i = 0
    let ref = database().ref('/');
    var corporateLife = {}
    for (i = 0; i < Object.keys(jsonObj["vocabulary"]).length; i++){
        var vocabKey = jsonObj["vocabulary"][i]
        corporateLife[vocabKey] = {
            "definition": [
                { 
                    "def" : jsonObj["definition"][i],
                    "language" : "eng"
                }
            ],
            "example" : [jsonObj["example"][i]]
        }
        try{
            ref.update({corporateLife})
        }catch(e){
            console.log("ref update error: " + e);
        }
    }
    
}

export function AddQuestionToDB(lang, type , questionString, vocab, category){
    var ref = database().ref("/" + category + "/" + vocab + "/" + "questions");
    var question = {}
    ref.on("value", function(snapshot){
        if (snapshot.exists){
            
        }else{
            var questionList = []
            questions[lang] = questionString
            questions["type"] = type 
            questionList.push(questions)
            ref.update({question})
        }
    })
}

export function AddExampleToDB(exampleString, vocab, category){

}