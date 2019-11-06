import types from './types';

const initialState = {
    original: null,
    current: null,
    transparency: 100,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.INITIALISE_IMAGE:
            return {
                ...state,
                original: action.imageData,
                current: action.imageData,
                transparency: 100,
            };
        case types.SET_IMAGE_DATA:
            return {
                ...state,
                current: action.imageData,
            };
        case types.SET_TRANSPARENCY:
            return {
                ...state,
                transparency: action.transparency,
            };
        case types.RESET_IMAGE:
            return {
                ...state,
                current: state.original,
                transparency: 100,
            };
        default:
            return state;
    }
};