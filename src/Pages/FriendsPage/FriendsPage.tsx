import React from 'react';
import style from "./Friends.module.css"
import FriendBlock from "./FriendBlock/FriendBlock";
import FriendsRequestsBlock from "./FriendsRequestsBlock/FriendsRequestsBlock";
import {useAppSelector} from "../../Redux/ReduxState";
import {v1} from "uuid";


const FriendsPage = () => {

    const state = useAppSelector(state1 => state1.FriendsPage)
    const friends = state.FriendsData.map(friend =>
        <FriendBlock key={v1()} state={friend}/>
    )

    return (
        <div className={style.FriendsBlock}>
            <div className={style.FriendsList}>
                {friends}
                {friends}
                {friends}
                {friends}
            </div>
            <div className={style.FriendsAddBlock}>
                <FriendsRequestsBlock state={state.FriendsRequest}/>
            </div>
        </div>
    );
};

export default FriendsPage;