import React from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../Redux/ReduxState";
import {changeUserStatusTC} from "../../../Redux/Reducers/profilePageReducer";
import {EditableStatus} from "../../../Components/EditableStatus/EditableStatus";
import {useParams} from "react-router-dom";

const ProfileStatus = () => {
    const status = useAppSelector(state => state.ProfilePage.status)
    const authorizedUserId = useAppSelector(state => state.auth.authorizedUserId)
    const {userId} = useParams<{ userId: string }>()
    let canBeChanged
    Number(authorizedUserId) === Number(userId) ? canBeChanged = true : canBeChanged = false

    const dispatch = useDispatch()

    const changeStatus = (newStatus: string) => {
        dispatch(changeUserStatusTC(newStatus))
    }

    return (
        <div>
            <EditableStatus Status={String(status)} callBack={changeStatus} canBeChanged={canBeChanged}/>
        </div>
    );
};

export default ProfileStatus;