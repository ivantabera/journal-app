/*
    {
        notes:[],
        active: null,
        active: {
            id:'asfdlhkhq3kj5523',
            title: '',
            body: '',
            imageUrl: '',
            date: 14234123412
        }
    }
 */

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
    
        default:
            return state;
    }
}