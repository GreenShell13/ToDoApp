import React, { memo, useCallback } from 'react'
import Fade from 'react-reveal/Fade'
import { useDispatch, useSelector } from 'react-redux'

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
import { authFormSelector, updateAuthParam } from '../../../pages/home/reducer/slice'

const Section = ({
    title = '',
    subTitle = '',
    regButtons = false,
    bgimg = '',
    styles = { color: '#fff' }
}) => {
    const dispatch = useDispatch()
    const authData = useSelector(authFormSelector)

    const handleChange = useCallback(e => 
        dispatch(updateAuthParam({ [e.target.name]: e.target.value }))
    , [dispatch])

    const handleClick = useCallback(() => {}, [])

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
                                    value={authData.login}
                                    onChange={handleChange}
                                    style={{ margin: '20px 20px 0px 20px' }} 
                                    label='Логин' 
                                />
                                <TextField
                                    name='password'
                                    value={authData.password}
                                    onChange={handleChange}
                                    style={{ margin: '10px 20px 20px 20px' }}
                                    label='Пароль'
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