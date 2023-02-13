import React, {useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import {SubmitHandler, useForm} from "react-hook-form";
import {getCaptchaTC, logInTC} from "../../Redux/Reducers/authReducer";
import {useAppSelector} from "../../Redux/ReduxState";
import {Navigate} from "react-router-dom";
import {appRoutes} from "../../Routes/constants";
import style from './LoginPage.module.css'

export interface LoginDataType {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

const LoginPage = () => {
    const {isAuth, captchaURL, isCaptchaRequired} = useAppSelector(state => state.auth)
    const dispatch = useDispatch();

    useEffect(()=>{
        if(isCaptchaRequired){
            dispatch(getCaptchaTC())
        }
    },[isCaptchaRequired])


    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<LoginDataType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
        },
    });
    const password = useRef({});
    password.current = watch('password', '');

    const onSubmit: SubmitHandler<LoginDataType> = ({email, password, rememberMe, captcha}: LoginDataType) => {
        dispatch(logInTC({email, password, rememberMe, captcha}))
    };

    if (isAuth) {
        return <Navigate to={appRoutes.PROFILE}/>
    }
    return (
        <div className={style.loginPage}>
            <h1 className={style.title}>
                Sign in
            </h1>
            <div className={style.loginBlock}>
                <div className={style.inputBlock}>
                    Email address
                    <input
                        {...register('email', {required: true})}
                        type={'email'}
                        className={style.Input}/>
                    {errors.email && <span className={style.error}>Email required</span>}
                </div>
                <div className={style.inputBlock}>
                    Password
                    <input
                        {...register('password', {required: true})}
                        type={'password'}
                        className={style.Input}/>
                    {errors.password && <span className={style.error}>Password required</span>}
                </div>
                <div className={style.rememberMeBlock}>
                    <input
                        {...register('rememberMe')}
                        type={'checkbox'}
                        className={style.checkBox}/>
                    Remember me?
                </div>
                {captchaURL &&
                <div className={style.captchaBlock}>
                    <img src={captchaURL} alt={'captcha'}/>
                    <input
                        {...register('captcha', {required: true})}
                        className={style.Input}></input>
                    {errors.captcha && <span className={style.error}>Captcha required</span>}
                </div>}
                <button type={'submit'} className={style.LoginButton} onClick={handleSubmit(onSubmit)}> Sign in</button>
            </div>
            <div className={style.registerRedirectBlock}>
                No account yet? <a href={'https://social-network.samuraijs.com/signUp'}>Sign up</a>.
            </div>
        </div>
    );
};

export default LoginPage;