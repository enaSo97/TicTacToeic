import React from "react"
import {Card} from "react-bootstrap"
import {getDatabaseObj} from "../firebase/database"
//import { firebaseAppAuth } from "../firebase/firebaseConfig";
//import withFirebaseAuth from "react-with-firebase-auth";
//import store from "../redux/store"


export default class CategoryCard extends React.Component{
    constructor(){
        super();
        this.state = {
            categories: []
        }
    }
    componentDidMount(){
        let currentComp = this
        getDatabaseObj("/voabulary", function(e){
            console.log(Object.keys(e))
            currentComp.setState({categories: Object.keys(e)})
        })
    }
    render(){
        const Cards = this.state.categories.map((category)=>{
            return (
                <Card style={{ width: '18rem' }} className=" mt-5 ">
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>{category}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
            );     
        })
        return Cards
    }
}
