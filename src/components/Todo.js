import React from 'react'
import { connect } from "react-redux"
import { toggleTodo } from "../redux/actions"
import cx from "classnames"
import '../index.css'


// cross the content when it is clicked since it is completed todo!
const Todo = ({todo, toggleTodo}) => (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span className={cx(
            "todo-item__text",
            todo && todo.completed && "todo-item__text--completed"
        )}>
        {console.log(todo.content)}
        {todo.content}
        </span>
    </li>
);

export default connect(
    null,
    {toggleTodo}
)(Todo)