import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {store} from "./Redux/ReduxState";

let reduxState = store.getState()
ReactDOM.render(
    <App state={reduxState}/>,
  document.getElementById('root')
);