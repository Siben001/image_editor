import {connect} from 'react-redux';
import Thunks from './thunks';
import Main from '../../pages/main';

const mapStateToProps = (state, ownProps) => {
    return {
        imageUrl: state.MainReducer.url
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getImageUrl: () => dispatch(Thunks.getImageUrl()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Main)