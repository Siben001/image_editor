import Types from './types';

const getUrls = urls => ({
    type: Types.GOT_IMAGE_URLS,
    urls,
});

const addImageUrl = url => ({
    type: Types.ADD_IMAGE_URL,
    url,
});

export default {
    getUrls,
    addImageUrl,
}