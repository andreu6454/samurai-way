import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {store} from "./Redux/ReduxState";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {AuthProvider} from "./Routes/AuthProvider";
import {routes} from "./App";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <AuthProvider>
            <RouterProvider router={routes}/>
        </AuthProvider>
    </Provider>,
);