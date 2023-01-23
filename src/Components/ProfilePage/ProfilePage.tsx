import React, {useEffect} from 'react';
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";
import {PostsDataType} from "../../Redux/Types";
import {addPostsAC, setUserProfileTC, setUserStatusTC} from "../../Redux/Reducers/profilePageReducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../Redux/ReduxState";
import PreLoader from "../../Items/PreLoader/PreLoader";
import {Redirect, useParams, withRouter} from "react-router-dom";


const ProfilePage = withRouter(() => {
    const posts = useAppSelector<Array<PostsDataType>>(state => state.ProfilePage.PostsData)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const {userId} = useParams<{ userId: string }>()

    const dispatch = useDispatch()
    const addPost = (post: string) => {
        dispatch(addPostsAC(post))
    }

    useEffect(() => {
        dispatch(setUserProfileTC(Number(userId)))
        dispatch(setUserStatusTC(Number(userId)))
    }, [userId])

    if (!isAuth) {
        return <Redirect to={"/login"}/>
    }
    return (
        <div>
            {isLoading ? <PreLoader/> :
                <>
                    <div className={style.appImg}>
                        <img
                            src={"https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"}
                            alt={"content-header"}/>
                    </div>
                    <div className={style.appContent}>
                        <ProfileInfo/>
                        <NewPost addPost={addPost}/>
                        <MyPosts PostsData={posts}/>
                    </div>
                </>
            }
        </div>
    );
});

export default ProfilePage;