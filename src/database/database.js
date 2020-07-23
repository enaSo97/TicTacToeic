import { database } from "./firebaseConfig";
//import store from "../redux/reducers/store";

export function getDatabaseObj(object, callback) {
    let ref = database().ref(object);
    ref.once("value").then((snapshot) => {
        callback(snapshot.val());
    })
}

export function getVocabById(id, callback) {
    //console.log(database);
    let ref = database().ref('/voabulary/' + id);
    ref.once("value").then((snapshot) => {
        //console.log("database : " + JSON.stringify(snapshot.val()));
        //vocab = snapshot.val();
        callback(snapshot.val())
    })
}

export function pushVocabToDatabaseFromJSON(filename) {
    var jsonObj = require("../objects/corporateLife_eng.json")
    let i = 0
    let ref = database().ref('/');
    var corporateLife = {}
    for (i = 0; i < Object.keys(jsonObj["vocabulary"]).length; i++) {
        let vocabKey = jsonObj["vocabulary"][i]
        /*corporateLife[vocabKey] = {
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
            co*nsole.log("ref update error: " + e);
        }*/
        /**adding question for now */
        var quest_ref = database().ref('/corporateLife/' + vocabKey);
        quest_ref.on("value", function (snapshot) {
            //console.log(JSON.stringify(snapshot))
            //AddQuestionToDB("eng", "short","What is the meaning of the following vocabulary?", vocabKey, "corporateLife")
            AddQuestionToDB("kor", "short" ,"다음 단어의 뜻은 무었입니까?", vocabKey, "corporateLife")
        })
    }

}

export function createQuestionObject(lang, type, questionString,) {

    var questionObj = {}
    questionObj[lang] = questionString
    questionObj["type"] = type

    return questionObj;

}

export function AddQuestionToDB(lang, type, questionString, vocab, category) {
    var refPath = "/" + category + "/" + vocab + "/questionList"
    //console.log("category = " + category + " vocab = " + vocab)
    //console.log("ref path = " + refPath)
    var ref = database().ref("/" + category + "/" + vocab + "/questionList");
    var questions = {}
    ref.on("value", function(snapshot) {

        var questionObj = createQuestionObject(lang, type, questionString)
        if (!snapshot.exists()) {

            var questionList = []
            questionList.push(questionObj)
            //console.log("why is it here? " + JSON.stringify(questions))
            var questRef = database().ref("/" + category + "/" + vocab)
            questRef.update({ questionList })

        } else {
            var newRef = database().ref(refPath+"/0");
            var addedQuestion = {}
            addedQuestion[lang] = questionString
            //console.log(JSON.stringify(addedQuestion));
            newRef.update(addedQuestion);
        }

    })
}

export function AddExampleToDB(exampleString, vocab, category) {

}