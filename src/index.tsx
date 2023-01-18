import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {store} from "./Redux/ReduxState";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

let reduxState = store.getState()
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App state={reduxState}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);