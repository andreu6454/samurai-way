import React, {useEffect} from 'react';
import {setUsersDataTC} from "../../Redux/Reducers/authReducer";
import {useDispatch} from "react-redux";

const LoginPage = () => {
    const dispatch = useDispatch()

    //// временно
    useEffect(() => {
        dispatch(setUsersDataTC())
    }, [])
    //// временно

    return (
        <div>
            <h1>Login Page</h1>
        </div>
    );
};

export default LoginPage;