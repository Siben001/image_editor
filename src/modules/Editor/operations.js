import Actions from "./actions";

const makeGray = (callback) => (dispatch, getState) => {
    const original = getState().EditorReducer.original;
    const alpha = getAlpha(getState().EditorReducer.transparency);
    const changeImage = (data, i) => {
        let brightness = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        data[i] = brightness; //red
        data[i + 1] = brightness; //green
        data[i + 2] = brightness; //blue
        data[i + 3] = alpha;
    };
    dispatch(updateImage(original, changeImage, callback));
};

const makeRed = (callback) => (dispatch, getState) => {
    const original = getState().EditorReducer.original;
    const alpha = getAlpha(getState().EditorReducer.transparency);
    const changeImage = (data, i) => {
        data[i] = 255; //red
        data[i + 3] = alpha;
    };
    dispatch(updateImage(original, changeImage, callback));
};


const changeTransparency = (transparency, callback) => (dispatch, getState) => {
    const current = getState().EditorReducer.current;
    const alpha = getAlpha(transparency);
    const changeImage = (data, i) => {
        data[i + 3] = alpha;
    };
    dispatch(updateImage(current, changeImage, callback));
    dispatch(Actions.setTransparency(transparency));
};

const updateImage = (src, changeImage, callback) => dispatch => {
    let data = deepcopy(src.data);
    for (let i = 0; i < data.length; i += 4) {
        changeImage(data, i);
    }
    const newImage = new ImageData(data, src.width, src.height);
    dispatch(Actions.setImageData(newImage));
    callback(newImage);
};

const getAlpha = value => ~~(255 * value / 100);

const deepcopy = src => {
    const imageDataCopy = new Uint8ClampedArray(src);
    imageDataCopy.set(src);
    return imageDataCopy
};

export default {
    makeGray,
    makeRed,
    changeTransparency,
}