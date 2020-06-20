import React from "react"
import {connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {

    constructor(props){
        super(props)
        this.state = { input: "" }
    }

    // ... component implementation
    // handleAddTodo = let it dispatch the addTodo action and reset the input
    handleAddTodo = () => {
        // dispatches actions to app todo
        this.props.addTodo(this.state.input)
        //console.log(this.state.input)
        // sets state back to empty string
        this.setState({ input: "" })
    }

    updateInput = input => {
        this.setState({ input });
        //console.log(input)
    }

    render() {
        return(
            <div>
                <input onChange={e => this.updateInput(e.target.value)} value={this.state.input} />
                <button className="add-todo" onClick={this.handleAddTodo}> Add Todo </button>
            </div>
        );
    }
}
//By passing it to connect, out component recieves it as a prop, automatically dispatch the action when it's called

// 

export default connect (
    null,
    { addTodo }
)(AddTodo)

// <AddTodo /> is wrapped with a parent component and <connect(AddTodo) />. Meanwhile <AddTodo /> now gains one prop: the addTodo action