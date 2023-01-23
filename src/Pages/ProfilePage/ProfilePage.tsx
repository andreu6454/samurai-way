import React, {useEffect} from 'react';
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";
import {PostsDataType} from "../../Redux/Types";
import {addPostsAC, setUserProfileTC} from "../../Redux/Reducers/profilePageReducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../Redux/ReduxState";
import PreLoader from "../../Components/PreLoader/PreLoader";


const ProfilePage = () => {
    const posts = useAppSelector<Array<PostsDataType>>(state => state.ProfilePage.PostsData)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const userId = 25817
    const dispatch = useDispatch()
    const addPost = (post: string) => {
        dispatch(addPostsAC(post))
    }

    useEffect(() => {
        dispatch(setUserProfileTC(Number(userId)))
    }, [userId])

    return (
        <div>
            {isLoading ? <PreLoader/> :
                <div className={style.appContent}>
                    <ProfileInfo/>
                    <div>
                        {/*<Suggestions/>*/}
                        <NewPost addPost={addPost}/>
                        <MyPosts PostsData={posts}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProfilePage;