

const initialState = {
    todos: [
        {value: 'Walk the dog', completed: false, id: Date.now()}
    ]
}

function reducer(state = initialState, action) {
    return state;
}

export default reducer;