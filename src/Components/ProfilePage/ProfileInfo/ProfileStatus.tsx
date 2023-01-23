import React from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../Redux/ReduxState";
import {changeUserStatusTC} from "../../../Redux/Reducers/profilePageReducer";
import {EditableSpan} from "../../../Items/EditableSpan/EditableSpan";

const ProfileStatus = () => {
    const status = useAppSelector(state => state.ProfilePage.status)
    const dispatch = useDispatch()

    const changeStatus = (newStatus: string) => {
        dispatch(changeUserStatusTC(newStatus))
    }

    return (
        <div>
            <EditableSpan Status={String(status)} callBack={changeStatus} />
        </div>
    );
};

export default ProfileStatus;