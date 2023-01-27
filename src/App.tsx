import React from 'react';
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import DialogsPage from "./Pages/DialogsPage/DialogsPage";
import {createHashRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import NewsPage from "./Pages/NewsPage/NewsPage";
import MusicPage from "./Pages/MusicPage/MusicPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import UsersPage from "./Pages/UsersPage/UsersPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import {PrivateRoutes} from "./Routes/PrivateRoutes";
import {Layout} from "./Components/Layout/Layout";
import {appRoutes} from "./Routes/constants";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";


export const routes = createHashRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route element={<PrivateRoutes/>}>
                <Route path={appRoutes.PROFILE} element={<ProfilePage/>}/>
                <Route path={appRoutes.MESSAGES} element={<DialogsPage/>}/>
                <Route path={appRoutes.USERS} element={<UsersPage/>}/>
                <Route path={appRoutes.SETTINGS} element={<SettingsPage/>}/>
                <Route path={appRoutes.NEWS} element={<NewsPage/>}/>
                <Route path={appRoutes.MUSIC} element={<MusicPage/>}/>
            </Route>
            <Route path={appRoutes.LOGIN} element={<LoginPage/>}/>
            <Route path={''} element={<Navigate to={appRoutes.PROFILE}/>}/>
            <Route path={appRoutes.NOTFOUND} element={<NotFoundPage/>}/>
        </Route>,
    ),
);
