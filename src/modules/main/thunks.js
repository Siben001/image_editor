import storageRef from "../firebase";
import Actions from "./actions";

const getGallery = () => async dispatch => {
    const starsRef = storageRef.child('images');
    try {
        const fileList = await starsRef.listAll();
        const urls = {};
        const urlPromises = fileList.items.map(item => item.getDownloadURL());
        const urlList = await Promise.all(urlPromises);
        urlList.forEach((url, ind) => urls[fileList.items[ind].name] = url);
        dispatch(Actions.getUrls(urls));
    } catch
        (error) {
        switch (error.code) {
            case 'storage/object-not-found':
                // File doesn't exist
                break;

            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;

            case 'storage/canceled':
                // User canceled the upload
                break;

            case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
            default: console.log(error)
        }
    }
};

const uploadImage = file => dispatch => {
    const ref = storageRef.child(`images/${file.name}_${Date.now()}`);
    ref.put(file).then(_ => {
        alert('File uploaded successfully!');
        dispatch(getGallery());
    });
};

export default {
    getGallery,
    uploadImage,
}