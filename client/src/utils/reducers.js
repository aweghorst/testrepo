import { useReducer } from "react";

import {
    UPDATE_BIKE,
    DELETE_BIKE,
} from "../utils/actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_BIKE:
            return {
                ...state,
                bikes: [...action.bikes],
            };

        case DELETE_BIKE:
            let newState = state.bikes.filter(bike => {
                return bike._id !== action._id;
            });
            return {
                ...state, 
                bikes: newState
            };

        default:
            return state;
    }
};


export function useBikeReducer(initialState) {
    return useReducer(reducer, initialState);
}
