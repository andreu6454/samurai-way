import React, {useEffect} from 'react';
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";
import {PostsDataType} from "../../Redux/Types";
import {addPostsAC, setAuthorizedUserProfileTC} from "../../Redux/Reducers/profilePageReducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../Redux/ReduxState";
import PreLoader from "../../Components/PreLoader/PreLoader";
import Suggestions from "./Suggestions/Suggestions";


const ProfilePage = () => {
    const posts = useAppSelector<Array<PostsDataType>>(state => state.ProfilePage.PostsData)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const userId = useAppSelector(state => state.auth.authorizedUserId)
    const fullName = useAppSelector(state => state.ProfilePage.userProfile.fullName)
    const dispatch = useDispatch()
    const addPost = (post: string) => {
        dispatch(addPostsAC(post))
    }

    useEffect(() => {
        if(!fullName){
            dispatch(setAuthorizedUserProfileTC(Number(userId)))
        }
    }, [])

    return (
        <div>
            {isLoading ? <PreLoader/> :
                <div className={style.appContent}>
                    <ProfileInfo/>
                    <div>
                        <Suggestions/>
                        <NewPost addPost={addPost}/>
                        <MyPosts PostsData={posts}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProfilePage;