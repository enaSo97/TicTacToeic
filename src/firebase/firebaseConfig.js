import firebase from "firebase";
import firebaseApp from "firebase/app"
//import store from "../redux/reducers/store"

export const config = {
    apiKey: "AIzaSyAX3nXmPsESTQWB_9BGiW0y7dUXgF8RbU0",
    authDomain: "tictactoeic.firebaseapp.com",
    databaseURL: "https://tictactoeic.firebaseio.com",
    projectId: "tictactoeic"
}

export const firebaseAppAuth = firebaseApp.initializeApp(config).auth();

export const database = firebase.database;



