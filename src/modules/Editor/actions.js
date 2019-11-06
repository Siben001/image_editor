import Types from './types';

const initImageData = imageData => ({
    type: Types.INITIALISE_IMAGE,
    imageData,
});

const setImageData = imageData => ({
    type: Types.SET_IMAGE_DATA,
    imageData,
});

const setTransparency = transparency => ({
    type: Types.SET_TRANSPARENCY,
    transparency,
});

const resetImage = _ => ({
    type: Types.RESET_IMAGE,
});


export default {
    initImageData,
    setImageData,
    setTransparency,
    resetImage,
}