import { combineReducers } from "redux"
import todos from "./todos"
import visibilityFilter from "./visibilityFilter"

export default combineReducers({todos, visibilityFilter});
// generate function that calls your reducers with the slices of state seleceted according to their keys
// combines their result into a single object again. 
// does not create a new object if all of the reducers porvided to it do not change state
