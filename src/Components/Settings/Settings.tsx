import React from 'react';
import style from './Settings.module.css'
import {store} from "../../Redux/ReduxState";

const Settings = () => {
    let reduxState = store.getState()
    console.log(reduxState);
    return (
        <div className={style.settingsModule}>
            <h1>Settings Page</h1>
        </div>
    );
};

export default Settings;