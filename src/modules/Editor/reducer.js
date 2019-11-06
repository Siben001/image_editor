import types from './types';

const initialState = {
    original: null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.INITIALISE_IMAGE:
            return {
                ...state,
                original: action.imageData,
                current: action.imageData,
            };
        case types.SET_IMAGE_DATA:
            return {
                ...state,
                current: action.imageData,
            };
        default:
            return state;
    }
};