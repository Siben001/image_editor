import {connect} from 'react-redux';
import {Actions, Operations, Thunks} from './index';
import Editor from '../../pages/Editor';

const mapStateToProps = (state) => {
    return {
        original: state.EditorReducer.original,
        transparency: state.EditorReducer.transparency,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getImage: (name, showImage) => dispatch(Thunks.getImage(name, showImage)),
        makeGray: (showImage) => dispatch(Operations.makeGray(showImage)),
        makeRed: (showImage) => dispatch(Operations.makeRed(showImage)),
        changeTransparency: (transparency, showImage) => dispatch(Operations.changeTransparency(transparency, showImage)),
        initImageData: (imageData) => dispatch(Actions.initImageData(imageData)),
        resetImage: () => dispatch(Actions.resetImage()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Editor)