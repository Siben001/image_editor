import {combineReducers} from 'redux';
import { MainReducer } from './main';
import { EditorReducer } from './Editor';


export default combineReducers({
    MainReducer,
    EditorReducer,
});