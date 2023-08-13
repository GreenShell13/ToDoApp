import React, { memo, useCallback } from 'react'
import Fade from 'react-reveal/Fade'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { TextField }from '@mui/material'

import {
    AuthForm as StyledAuthForm,
    ButtonGroup,
    RegButton,
    AuthButton
} from './styledComponents'
import { 
    authFormSelector, 
    updateAuthParam 
} from '../../pages/home/reducer/slice'
import { authUrl } from '../../pages/home/reducer/constants'


const AuthForm = () => {
    const dispatch = useDispatch()
    const { login, password, isAuth } = useSelector(authFormSelector)

    const handleChange = useCallback(e => 
        dispatch(updateAuthParam({ [e.target.name]: e.target.value }))
    , [dispatch])

    const handleClick = useCallback(async () => {
        await 
            axios.get(authUrl, { params: {login, password} })
                .then(response => dispatch(updateAuthParam({ ...response.data?.data })))
                .catch(err => console.log(err))
    }, [dispatch, login, password])

    return (
        <>
            <Fade clear>
                <StyledAuthForm>
                    <Fade cascade top>
                        <TextField 
                            name='login'
                            value={login}
                            onChange={handleChange}
                            style={{ margin: '20px 20px 0px 20px' }} 
                            label='Логин' 
                        />
                        <TextField
                            name='password'
                            value={password}
                            onChange={handleChange}
                            style={{ margin: '10px 20px 20px 20px' }}
                            label='Пароль'
                            type='password'
                        />
                    </Fade>
                </StyledAuthForm>
            </Fade>
            <Fade bottom>
                <ButtonGroup>
                    <AuthButton onClick={handleClick}>
                        <p style={{ opacity: 1, color: '#fff' }}>Войти</p>
                    </AuthButton>
                    <RegButton>
                        <p>Зарегистрироваться</p>
                    </RegButton>
                </ButtonGroup>
            </Fade>
        </>
    )
}

export default memo(AuthForm)