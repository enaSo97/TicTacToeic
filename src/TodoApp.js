import React from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import VisibilityFilters from "./components/VisibilityFilter"
import "./index.css"

export default function TodoApp(){
    return (
        <div>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    );
}