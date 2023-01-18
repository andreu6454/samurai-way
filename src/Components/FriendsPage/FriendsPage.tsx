import React from 'react';
import style from "./Friends.module.css"
import FriendBlock from "./FriendBlock/FriendBlock";
import {FriendsPageDataType} from "../../Redux/Types";
import FriendsRequestsBlock from "./FriendsRequestsBlock/FriendsRequestsBlock";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/ReduxState";

type FriendsPropsType = {
    state: FriendsPageDataType
}
const FriendsPage = (props: FriendsPropsType) => {
    const isAuth = useSelector<AppRootStateType>(state => state.auth.isAuth)

    const friends = props.state.FriendsData.map(friend =>
        <FriendBlock state={friend}/>
    )

    if (!isAuth) {
        console.log(isAuth)
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={style.FriendsBlock}>
            <div>
                {friends}
            </div>
            <div className={style.FriendsAddBlock}>
                <FriendsRequestsBlock state={props.state.FriendsRequest}/>
            </div>
        </div>
    );
};

export default FriendsPage;