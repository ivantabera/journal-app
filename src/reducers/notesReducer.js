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

import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
    
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesLoad:
            return{
                ...state,
                notes: [...action.payload]
            }

        default:
            return state;
    }
}