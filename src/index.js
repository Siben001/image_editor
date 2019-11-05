import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import './index.css';

import reducers from './modules/reducer';
import App from './modules/main/container';
import Editor from './modules/Editor/container';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/edit/:imageName' component={Editor}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
