import React, {lazy} from 'react';
import {createHashRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import {PrivateRoutes} from "./Routes/PrivateRoutes";
import {Layout} from "./Components/Layout/Layout";
import {appRoutes} from "./Routes/constants";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import {withSuspense} from "./hoc/WithSuspense";

const ProfilePage = lazy(() => import('./Pages/ProfilePage/ProfilePage'))
const DialogsPage = lazy(() => import('./Pages/DialogsPage/DialogsPage'))
const UsersPage = lazy(() => import('./Pages/UsersPage/UsersPage'))
const NewsPage = lazy(() => import('./Pages/NewsPage/NewsPage'))
const MusicPage = lazy(() => import('./Pages/MusicPage/MusicPage'))
const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'))
const FriendsPage = lazy(() => import('./Pages/FriendsPage/FriendsPage'))

export const routes = createHashRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route element={<PrivateRoutes/>}>
                <Route path={appRoutes.PROFILE} element={withSuspense(<ProfilePage/>)}/>
                <Route path={appRoutes.MESSAGES} element={withSuspense(<DialogsPage/>)}/>
                <Route path={appRoutes.USERS} element={withSuspense(<UsersPage/>)}/>
                <Route path={appRoutes.SETTINGS} element={<SettingsPage/>}/>
                <Route path={appRoutes.NEWS} element={withSuspense(<NewsPage/>)}/>
                <Route path={appRoutes.MUSIC} element={withSuspense(<MusicPage/>)}/>
                <Route path={appRoutes.FRIENDS} element={withSuspense(<FriendsPage/>)}/>
            </Route>
            <Route path={appRoutes.LOGIN} element={withSuspense(<LoginPage/>)}/>
            <Route path={''} element={<Navigate to={appRoutes.PROFILE}/>}/>
            <Route path={appRoutes.NOTFOUND} element={<NotFoundPage/>}/>
        </Route>,
    ),
);
