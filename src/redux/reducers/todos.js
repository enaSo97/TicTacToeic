import { ADD_TODO, TOGGLE_TODO } from "../actionTypes"

const initialState = {
    allIds: [],
    byIds: {}
};
// never write directly to state or its fields, instead return new objects
// new todo is equal to old todos concatenated with a single new item at the end. 
export default function(state = initialState, action){
    switch (action.type) {
        case ADD_TODO:{
            // when the case is to add todo
            const { id, content } = action.payload;
            return{
                ...state, // you cannot mutate the state, must create copy
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TODO:{
            const { id } = action.payload;
            return{
                ...state,
                byIds:{
                    ...state.byIds,
                    [id]:{
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        default:
            return state;
    }
}