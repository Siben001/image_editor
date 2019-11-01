import Types from './types';
// import {todosRef} from '../firebase'

const addToDo = newToDo => async dispatch => {
    console.log(newToDo)
    // todosRef.push().set(newToDo).catch(err => console.log({err}));
};
const completeToDo = completeToDo => async dispatch => {
    // todosRef.child(completeToDo).remove().catch(err => console.log({err}));
};

const getUrl = url => ({
    type: Types.FETCH_TODOS,
    url,
});

export default {
    getUrl,
}