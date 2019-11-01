import Types from './types';

const initialState = {
    url: "",
};

export default (state = initialState, action) => {
    switch(action.type) {
        case Types.FETCH_TODOS:
            console.log(action)
            return {
                ...state,
                url: action.url,
            };
        default:
            return state;
    }
};