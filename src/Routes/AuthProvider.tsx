import {Box} from '@mui/material';
import React, {ReactNode, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {isAuthUser} from "../Redux/Reducers/authReducer";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isAuthUser());
    }, []);

    return <Box>{children}</Box>;
};