import React, { memo, useCallback } from 'react'
import Fade from 'react-reveal/Fade'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { TextField }from '@mui/material'

import { 
    Wrap, 
    ItemText, 
    AuthButton,
    TopBar,
    ButtonGroup,
    RegButton,
    AuthForm
} from './styledComponents'
import { 
    authFormSelector, 
    updateAuthParam 
} from '../../../pages/home/reducer/slice'
import { authUrl } from '../../../pages/home/reducer/constants'

const Section = ({
    title = '',
    subTitle = '',
    regButtons = false,
    bgimg = '',
    styles = { color: '#fff' }
}) => {
    const dispatch = useDispatch()
    const {login, password, isAuth } = useSelector(authFormSelector)

    const handleChange = useCallback(e => 
        dispatch(updateAuthParam({ [e.target.name]: e.target.value }))
    , [dispatch])

    const handleClick = useCallback(async () => {
        const response = await axios.get(authUrl).catch(err => console.log(err))    
        console.log(response)
        if (response?.success) dispatch(updateAuthParam({ ...response.data }))
    }, [dispatch])

    return (
        <Wrap bgimg={bgimg}>
            <TopBar>
                <h1>𝕲𝖗𝖊𝖊𝖓𝕱𝖑𝖆𝖒𝖊</h1>
            </TopBar>
            <Fade bottom>
                <ItemText>
                    <h1 style={{ margin: 0, fontSize: '3rem', color: styles.color }}>{title}</h1>
                    <p>{subTitle}</p>
                </ItemText>
            </Fade>
            {regButtons && 
                <>
                    <Fade clear>
                        <AuthForm>
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
                        </AuthForm>
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
            }
        </Wrap>
    )
}

export default memo(Section)