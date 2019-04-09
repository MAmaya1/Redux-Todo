import { ADD_ITEM, TOGGLE_ITEM } from "../actions";
import '../index.css'

const initialState = {
    todos: [
        {value: 'Walk the dog', completed: false, id: Date.now()}
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {value: action.payload, completed: false, id: Date.now()}
                ]
            }
        
        case TOGGLE_ITEM:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
            }
    
        default:
            return state;
    }
}

export default reducer;