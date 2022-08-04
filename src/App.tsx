import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {DialogsDataType, MessageDataType, PostsDataType} from "./index";
type AppPropsType = {
    DialogsData: Array<DialogsDataType>
    MessageData: Array<MessageDataType>
    PostsData: Array<PostsDataType>

}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={"/dialogs"}><Dialogs DialogsData={props.DialogsData} MessageData={props.MessageData}/> </Route>
                    <Route path={"/profile"}> <Profile PostsData={props.PostsData}/> </Route>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>

                </div>
            </div>
        </BrowserRouter>

)
    ;
}

export default App;
