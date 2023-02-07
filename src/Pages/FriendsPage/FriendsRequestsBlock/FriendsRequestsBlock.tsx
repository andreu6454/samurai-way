import React from 'react';
import style from "./FriendsRequestsBlock.module.css"
import {FriendsRequestType} from "../../../Redux/Types";
import Request from "./Request/Request";
import {v1} from "uuid";

type FriendsRequestBlock = {
    state: Array<FriendsRequestType>
}
const FriendsRequestsBlock = (props: FriendsRequestBlock) => {

    const friendRequests = props.state.map(request =>
        <Request key={v1()} state={request}/>
    )

    return (
        <div className={style.FriendsRequestBlock}>
            <div className={style.title}> Friend requests</div>
            <div className={style.content}>
                {friendRequests}
            </div>
        </div>
    );
};

export default FriendsRequestsBlock;