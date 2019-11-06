import Types from './types';

const initImageData = imageData => ({
    type: Types.INITIALISE_IMAGE,
    imageData,
});

const setImageData = imageData => ({
    type: Types.SET_IMAGE_DATA,
    imageData,
});


export default {
    initImageData,
    setImageData,
}