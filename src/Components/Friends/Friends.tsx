import React from 'react';
import style from "./Friends.module.css"
import FriendBlock from "./FriendBlock/FriendBlock";
import {FriendsPageDataType} from "../../Redux/Types";
import FriendsRequestsBlock from "./FriendsRequestsBlock/FriendsRequestsBlock";

type FriendsPropsType = {
    state: FriendsPageDataType
}
const Friends = (props: FriendsPropsType) => {
    const friends = props.state.FriendsData.map(friend =>
        <FriendBlock state={friend}/>
    )
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

export default Friends;