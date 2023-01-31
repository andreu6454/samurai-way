import React, {Dispatch, SetStateAction, useState} from 'react';
import style from './ProfileEditBlock.module.css'
import {useAppSelector} from "../../../../Redux/ReduxState";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {changeUserProfileDataTC} from "../../../../Redux/Reducers/profilePageReducer";

type ProfileEditBlockPropsType = {
    setProfileEditable: Dispatch<SetStateAction<boolean>>
}

export interface editProfileDatatype {
    Name: string,
    Status: string,
    AboutMe: string,
    LookingForAJob: boolean,
    LookingForAJobDescription: string,
}

const ProfileEditBlock = ({setProfileEditable}: ProfileEditBlockPropsType) => {
    const {
        fullName,
        aboutMe,
        lookingForAJobDescription,
        lookingForAJob,
        userId
    } = useAppSelector(state => state.ProfilePage.userProfile)
    const [error, setError] = useState(false)
    const status = useAppSelector(state => state.ProfilePage.status)
    const id = Number(userId)
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
    } = useForm<editProfileDatatype>({
        defaultValues: {
            Name: fullName,
            Status: status,
            AboutMe: aboutMe,
            LookingForAJob: lookingForAJob,
            LookingForAJobDescription: lookingForAJobDescription
        },
    });

    const onSubmit: SubmitHandler<editProfileDatatype> = (
        {
            Name,
            Status,
            AboutMe,
            LookingForAJob,
            LookingForAJobDescription
        }: editProfileDatatype
    ) => {
        if (Status === null || Status === "" || AboutMe === null || AboutMe === ""
            || LookingForAJobDescription === null || LookingForAJobDescription === "") {
            setError(true)
        } else {
            setError(false)
            dispatch(changeUserProfileDataTC({
                    Name,
                    Status,
                    AboutMe,
                    LookingForAJob,
                    LookingForAJobDescription,
                    userId: id
                })
            )
            closeHandle()
        }
    }

    const closeHandle = () => {
        setProfileEditable(false)
    }

    return (
        <div className={style.editBlock}>
            <div className={style.inputBlock}>
                Name
                <input {...register('Name')} className={style.Input}
                       defaultValue={fullName}/>
            </div>
            <div className={style.inputBlock}>
                Status
                <input {...register('Status')} className={style.Input} defaultValue={status}/>
            </div>
            <div className={style.inputBlock}>
                About me
                <input {...register('AboutMe')} className={style.Input} defaultValue={aboutMe}/>
            </div>
            <div className={style.checkBoxInputBlock}>
                <input {...register('LookingForAJob')} type={'checkbox'}
                       defaultChecked={lookingForAJob}
                       className={style.checkBoxInput}/>
                Looking for a job
            </div>
            <div className={style.inputBlock}>
                Skills description
                <input {...register('LookingForAJobDescription')} className={style.Input}
                       defaultValue={lookingForAJobDescription}/>
            </div>
            {error &&
                <div className={style.error}> Заполните все поля! </div>
            }
            <div className={style.buttonBlock}>
                <button className={style.saveButton} onClick={handleSubmit(onSubmit)}>Save</button>
                <button className={style.cancelButton} onClick={closeHandle}>Cancel</button>
            </div>
        </div>
    );
};

export default ProfileEditBlock;