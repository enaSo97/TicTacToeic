import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SUBMIT_ANSWER, SET_LANGUAGE, SET_QUESTION } from './actionTypes'

let nextTodoId = 0
let nextVocabId = 0;
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {id}
})

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {
        filter
    }
})

export const submitAnswer = answer => ({
    type: SUBMIT_ANSWER,
    payload: {
        answer
    }
})

export const setVocabQuestion = object => ({
    type : SET_QUESTION,
    payload : {
        word: object.word,
        correct : false
    }
    
})

export const setLanguage = language => ({
    type: SET_LANGUAGE,
    payload : {
        language
    }
})

// .. other actions