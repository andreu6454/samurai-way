import React from 'react';
import './App.css';
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import ProfilePage from "../Components/ProfilePage/ProfilePage";
import DialogsPage from "../Components/DialogsPage/DialogsPage";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import NewsPage from "../Components/NewsPage/NewsPage";
import MusicPage from "../Components/MusicPage/MusicPage";
import SettingsPage from "../Components/SettingsPage/SettingsPage";
import {StateDataType} from "../Redux/Types";
import FriendsPage from "../Components/FriendsPage/FriendsPage";
import UsersPage from "../Components/UsersPage/UsersPage";

type AppPropsType = {
    state: StateDataType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.NavBarPage}/>
                <div className="app-wrapper-content">
                    <Route path={"/"}><Redirect to={"/profile"}/></Route>
                    <Route path={"/dialogs"}> <DialogsPage/> </Route>
                    <Route path={"/profile"}> <ProfilePage/> </Route>
                    <Route path={"/news"}> <NewsPage/> </Route>
                    <Route path={"/music"}> <MusicPage/> </Route>
                    <Route path={"/settings"}> <SettingsPage/> </Route>
                    <Route path={"/friends"}> <FriendsPage state={props.state.FriendsPage}/> </Route>
                    <Route path={"/users"}> <UsersPage/></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
