import { VISIBILITY_FILTERS } from "../constants"
import { LANGUAGES } from "../constants"


// export const getCurrentVocab = store => store

// getting todos object from the store
export const getTodoState = store => store.todos;

//if todo state is set then return list of the ids of the todos if not then return empuy list 
export const getTodoList = store =>
    getTodoState(store) ? getTodoState(store).allIds : [];

// if todo state is set then return byIds with new id added or else return empty object
export const getTodoById = (store, id) =>
    getTodoState(store) ? {...getTodoState(store).byIds[id], id} : {};

// select from store combining information form multiple reducers
// .map creates a new array populated with the results of calling a provided function on every element in the calling array

export const getTodos = store => 
    getTodoList(store).map(id => getTodoById(store,id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store); // getting array of every todos
    console.log("all todos  = " + JSON.stringify(allTodos));
    switch (visibilityFilter){
        case VISIBILITY_FILTERS.COMPLETED:
            console.log("filter is set to completed!!")
            return allTodos.filter(todo=> todo.completed)
        case VISIBILITY_FILTERS.INCOMPLETE:
            console.log("filter is set to incompleted!!!!")
            return allTodos.filter(todo => !todo.completed)
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos
    }
}