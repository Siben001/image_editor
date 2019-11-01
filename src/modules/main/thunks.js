import storageRef from "../firebase";
import Actions from "./actions";

const getImageUrl = () => (dispatch) => {
    const starsRef = storageRef.child('images/cat1.jpg');
    // Get the download URL
    starsRef.getDownloadURL().then(function(url) {
        dispatch(Actions.getUrl(url));
        console.log(url)
        // Insert url into an <img> tag to "download"
    }).catch(function(error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
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
        }
    });

};

export default {
    getImageUrl,
}