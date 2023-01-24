import React from 'react';
import style from './Suggestions.module.css'
import Suggestion from "./Suggestion/Suggestion";
import {useAppSelector} from "../../../Redux/ReduxState";

const Suggestions = () => {
    const smallAvatar = useAppSelector(state => state.ProfilePage.userProfile.photos.small)
    const largeAvatar = useAppSelector(state => state.ProfilePage.userProfile.photos.large)
    const status = useAppSelector(state => state.ProfilePage.status)

    return <>
        {((!smallAvatar && !largeAvatar) || !status) &&
            <div className={style.SuggestionsBlock}>
                <div className={style.title}>
                    Suggestions:
                </div>
                <div className={style.container}>
                    {(!smallAvatar && !largeAvatar) &&
                        <Suggestion title={"Установите фото профиля"}
                                    description={"Так будет проще друзьям найти вас"}/>}
                    {!status &&
                        <Suggestion title={"Добавить статус"} description={"Так вы можете рассказать всем о себе"}/>}
                </div>
            </div>}
    </>
};

export default Suggestions;