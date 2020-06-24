import React from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import VisibilityFilters from "./components/VisibilityFilter"
import "./index.css"
import QuestionBox from "./components/QuestionBox"

export default function TodoApp(){
    return (
        <div>
            {/*<AddTodo />
            <TodoList />
            <VisibilityFilters />*/}
            <QuestionBox />
        </div>
    );
}