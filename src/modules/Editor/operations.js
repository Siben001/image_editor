import Actions from "./actions";

const makeGray = (callback) => (dispatch, getState) => {
    const original = getState().EditorReducer.original;
    const current = getState().EditorReducer.current;
    let data = deepcopy(original.data);
    for (let i = 0; i < data.length; i += 4) {
        let brightness = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        data[i] = brightness; //red
        data[i + 1] = brightness; //green
        data[i + 2] = brightness; //blue
        data[i + 3] = current.data[i + 3];
    }
    const newImage = new ImageData(data, original.width, original.height);
    dispatch(Actions.setImageData(newImage));
    callback(newImage);
};

const makeRed = (callback) => (dispatch, getState) => {
    const original = getState().EditorReducer.original;
    const current = getState().EditorReducer.current;
    let data = deepcopy(original.data);
    for (let i = 0; i < data.length; i += 4) {
        data[i] = 255; //red
        data[i + 3] = current.data[i + 3];
    }
    const newImage = new ImageData(data, original.width, original.height);
    dispatch(Actions.setImageData(newImage));
    callback(newImage);
};


const changeTransparency = (transparency, callback) => (dispatch, getState) => {
    const original = getState().EditorReducer.current;
    let data = deepcopy(original.data);
    for (let i = 0; i < data.length; i += 4) {
        data[i + 3] = ~~(255 * transparency / 100) //alpha
    }
    const newImage = new ImageData(data, original.width, original.height);
    dispatch(Actions.setImageData(newImage));
    callback(newImage);
};

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