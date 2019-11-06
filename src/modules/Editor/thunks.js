import storageRef from "../firebase";
import axios from 'axios';

const getImage = (name, showImage) => dispatch => {
    const imageRef = storageRef.child(`images/${name}`);
    imageRef.getDownloadURL()
        .then(url => {
            dispatch(downloadImage(url, showImage))
        })
        .catch(error => {
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
        })
};

const downloadImage = (url, callback = () => {}) => _ => {
    axios.get(url, {responseType: 'blob'})
        .then(imageBlob => {
            const blobUrl = URL.createObjectURL(imageBlob.data);
            callback(blobUrl);
        })
        .catch(err => console.log(err))
};

export default {
    getImage,
}