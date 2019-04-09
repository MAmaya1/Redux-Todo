export const ADD_ITEM = 'ADD_ITEM';

export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const TOGGLE_ITEM = 'TOGGLE_ITEM';

export const toggleItem = id => {
    return {
        type: TOGGLE_ITEM,
        payload: id
    }
}