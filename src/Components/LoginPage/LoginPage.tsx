import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Checkbox,
    FormControl, FormControlLabel,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField,
    Typography
} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {logInTC} from "../../Redux/Reducers/authReducer";
import {AppRootStateType} from "../../Redux/ReduxState";
import {Redirect} from "react-router-dom";

export interface LoginDataType {
    email: string,
    password: string,
    rememberMe: boolean,
}

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const isAuth = useSelector<AppRootStateType>(state => state.auth.isAuth)
    const userID = useSelector<AppRootStateType>(state => state.auth.userId)

    const dispatch = useDispatch();


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
        },
    });
    const password = useRef({});
    password.current = watch('password', '');

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const onSubmit: SubmitHandler<LoginDataType> = ({email, password, rememberMe}: LoginDataType) => {
        dispatch(logInTC({email, password, rememberMe}))
    };

    if (isAuth) {
        return <Redirect to={`/profile/${userID}`}/>
    }
    return (
        <Box>
            <Card sx={{width: 413, m: '40px auto', py: 3}}>
                <CardContent>
                    <Typography variant={'h5'} fontWeight={'Bold'} textAlign={'center'}>
                        Sign In
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', px: 1}}>
                        <FormControl sx={{m: 1}} variant="standard">
                            <TextField
                                id="outlined-helperText"
                                label="Email"
                                variant="standard"
                                {...register('email', {required: 'Email Address is required'})}
                                error={!!errors.email}
                            />
                            <Box height="24px">
                                {errors.email && (
                                    <Typography variant="body2" color="error">
                                        {errors.email.message}
                                    </Typography>
                                )}
                            </Box>
                        </FormControl>
                        <FormControl sx={{m: 1}} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="register-password"
                                type={showPassword ? 'text' : 'password'}
                                {...register('password', {
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: 'Password must have at least 8 characters',
                                    },
                                })}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={!!errors.password}
                            />
                            <Box height="24px">
                                {errors.password && (
                                    <Typography variant="body2" color="error">
                                        {errors.password.message}
                                    </Typography>
                                )}
                            </Box>
                        </FormControl>
                        <FormControlLabel
                            sx={{m: 1}}
                            control={
                                <Checkbox
                                    {...register('rememberMe')}
                                    checked={watch('rememberMe')}
                                    name="rememberMe"
                                />
                            }
                            label="Remember me"
                        />
                    </Box>
                </CardContent>
                <CardActions
                    sx={{display: 'flex', flexDirection: 'column', gap: '31px', px: 3}}
                >
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{borderRadius: 30, bgcolor: '#366EFF', mt: 5}}
                        onClick={handleSubmit(onSubmit)}
                    >
                        Sign In
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default LoginPage;