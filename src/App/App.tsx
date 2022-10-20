import React from 'react';
import './App.css';
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Profile from "../Components/Profile/Profile";
import Dialogs from "../Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "../Components/News/News";
import Music from "../Components/Music/Music";
import Settings from "../Components/Settings/Settings";
import {StateDataType} from "../Redux/Types";
import Friends from "../Components/Friends/Friends";

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
                    <Route path={"/dialogs"}> <Dialogs state={props.state.MessagesPage}/> </Route>
                    <Route path={"/profile"}> <Profile /> </Route>
                    <Route path={"/news"}> <News/> </Route>
                    <Route path={"/music"}> <Music/> </Route>
                    <Route path={"/settings"}> <Settings/> </Route>
                    <Route path={"/friends"}> <Friends state={props.state.FriendsPage}/> </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
