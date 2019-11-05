import {connect} from 'react-redux';
import Thunks from './thunks';
import Editor from '../../pages/Editor';

const mapStateToProps = (state, ownProps) => {
    return {
        urls: state.MainReducer.urls
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getImageUrl: (name, showImage) => dispatch(Thunks.getImageUrl(name, showImage)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Editor)