import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo"

import { getTodosByVisibilityFilter } from "../redux/selectors"

const TodoList = ({ todos }) => (
    <ul className="todo-list">
            
        {
            todos && todos.length 
            ? todos.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
            }) :  "No todos left! :)"
        }

    </ul>
)

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    //console.log("current filter = " + visibilityFilter);
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    console.log("todo object parameter = " + JSON.stringify(todos));
    return { todos };
}

export default connect(mapStateToProps)(TodoList);