import React, {useEffect} from 'react';
import './App.css';
import Header from "../Pages/Header/Header";
import Navbar from "../Pages/Navbar/Navbar";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import DialogsPage from "../Pages/DialogsPage/DialogsPage";
import {Redirect, Route, Switch} from "react-router-dom";
import NewsPage from "../Pages/NewsPage/NewsPage";
import MusicPage from "../Pages/MusicPage/MusicPage";
import SettingsPage from "../Pages/SettingsPage/SettingsPage";
import {StateDataType} from "../Redux/Types";
import FriendsPage from "../Pages/FriendsPage/FriendsPage";
import UsersPage from "../Pages/UsersPage/UsersPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/ReduxState";
import {setUsersDataTC} from "../Redux/Reducers/authReducer";
import PreLoader from "../Components/PreLoader/PreLoader";

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
