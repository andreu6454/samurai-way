import React, {useEffect} from 'react';
import './App.css';
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import ProfilePage from "../Components/ProfilePage/ProfilePage";
import DialogsPage from "../Components/DialogsPage/DialogsPage";
import {Redirect, Route, Switch} from "react-router-dom";
import NewsPage from "../Components/NewsPage/NewsPage";
import MusicPage from "../Components/MusicPage/MusicPage";
import SettingsPage from "../Components/SettingsPage/SettingsPage";
import {StateDataType} from "../Redux/Types";
import FriendsPage from "../Components/FriendsPage/FriendsPage";
import UsersPage from "../Components/UsersPage/UsersPage";
import LoginPage from "../Components/LoginPage/LoginPage";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/ReduxState";
import {setUsersDataTC} from "../Redux/Reducers/authReducer";
import PreLoader from "../Items/PreLoader/PreLoader";

type AppPropsType = {
    state: StateDataType
}

function App(props: AppPropsType) {
    const dispatch = useDispatch()

    const userId = useSelector<AppRootStateType>(state => state.auth.authorizedUserId)
    const isInitialized = useSelector<AppRootStateType>(state => state.app.isInitialized)


    useEffect(() => {
        dispatch(setUsersDataTC())
    }, [])

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.NavBarPage} userId={Number(userId)}/>
            {isInitialized ?
                <PreLoader/> :
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path={"/"}><Redirect to={"/login"}/> </Route>
                        <Route path={"/dialogs"}> <DialogsPage/> </Route>
                        <Route path={"/profile/:userId"}> <ProfilePage/> </Route>
                        <Route path={"/news"}> <NewsPage/> </Route>
                        <Route path={"/music"}> <MusicPage/> </Route>
                        <Route path={"/settings"}> <SettingsPage/> </Route>
                        <Route path={"/friends"}> <FriendsPage state={props.state.FriendsPage}/> </Route>
                        <Route path={"/users"}> <UsersPage/> </Route>
                        <Route path={"/login"}> <LoginPage/> </Route>
                        <Route exact path={"*"}>
                            <div style={{textAlign: "center", marginTop: "50px"}}> 404: page not found</div>
                        </Route>
                    </Switch>
                </div>
            }
        </div>
    );
}

export default App;
