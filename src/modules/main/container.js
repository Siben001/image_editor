import {connect} from 'react-redux';
import {Thunks} from './index';
import Main from '../../pages/MainPage';

const mapStateToProps = (state) => {
    return {
        urls: state.MainReducer.urls
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGallery: () => dispatch(Thunks.getGallery()),
        uploadImage: (file) => dispatch(Thunks.uploadImage(file)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Main)