import storageRef from "../firebase";
import Actions from "../main/actions";

const getImageUrl = (name, showImage) => async (dispatch, getState) => {
    const imageUrl = getState().MainReducer.urls[name];
    console.log(imageUrl)
    if (!imageUrl) {
        console.log(storageRef)
        const imageRef = storageRef.child(`images/${name}`);
        imageRef.getDownloadURL()
            .then(url => {
                dispatch(Actions.addImageUrl({[name]: url}));
                console.log(url)
                showImage(url);
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
                }
            })
    }
    else {showImage(imageUrl)}
};

export default {
    getImageUrl,
}