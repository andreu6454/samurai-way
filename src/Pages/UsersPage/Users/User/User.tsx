import React, {useState} from 'react';
import style from './User.module.css'
import {UserType} from "../../../../Redux/Types";
import {useDispatch} from "react-redux";
import {followTC} from "../../../../Redux/Reducers/usersPageReducer";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../../Redux/ReduxState";
import {Box, Popover, Typography} from "@mui/material";

type UserPropsType = {
    user: UserType
}
const User = ({user}: UserPropsType) => {
    const dispatch = useDispatch()
    const altPhoto = "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
    const isDisabled = useAppSelector(state => state.UsersPage.isDisabled)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const onClickHandler = () => {
        dispatch(followTC(user.followed, user.id))
    }
    const showFullStatusHandle = (event: any) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={style.user}>
            <span className={style.leftBlock}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small ? user.photos.small : altPhoto} alt={"Avatar"}
                         className={style.avatar}/>
                </NavLink>
                <button onClick={onClickHandler}
                        className={style.followButton}
                        disabled={isDisabled}
                >
                    {user.followed ? "Unfollow" : "Follow"}
                </button>
            </span>
            <div className={style.rightBlock}>
                <div className={style.UserName}>{user.name} </div>
                <div className={style.UserStatus} onClick={showFullStatusHandle}>{user.status}</div>
                <Popover
                    sx={{p: 3}}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} p={3}>
                        <Typography>
                            Status:
                        </Typography>
                        <Typography >
                            {user.status}
                        </Typography>
                    </Box>
                </Popover>
            </div>
        </div>
    );
};

export default User;