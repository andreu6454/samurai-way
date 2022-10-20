import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {store} from "./Redux/ReduxState";
import {Provider} from "react-redux";

let reduxState = store.getState()
ReactDOM.render(
    <Provider store={store}>
        <App state={reduxState}/>
    </Provider>,
  document.getElementById('root')
);