import Types from './types';

const initialState = {
    urls: {},
    image: null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case Types.GOT_IMAGE_URLS:
            return {
                ...state,
                urls: action.urls,
            };
        case Types.ADD_IMAGE_URL:
            console.log(action)
            return {
                ...state,
                urls: {...state.urls, ...action.url},
                image: action.image,
            };
        default:
            return state;
    }
};