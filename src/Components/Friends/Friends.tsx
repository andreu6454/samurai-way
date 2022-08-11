import React from 'react';
import style from "./Friends.module.css"
import FriendBlock from "./FriendBlock/FriendBlock";
import {FriendsDataType} from "../../Redux/State";
import FriendsAddBlock from "./FriendsAddBlock/FriendsAddBlock";

type FriendsPropsType = {
    state: FriendsDataType
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
                <FriendsAddBlock/>
            </div>
        </div>
    );
};

export default Friends;