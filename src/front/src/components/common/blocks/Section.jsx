import React, { memo } from 'react'
import Fade from 'react-reveal/Fade'
import { useSelector } from 'react-redux'

import { 
    Wrap, 
    ItemText, 
    TopBar,
} from './styledComponents'
import AuthForm from '../../auth/AuthForm'
import { authSelector } from '../../../pages/home/reducer/slice'


const Section = ({
    title = '',
    subTitle = '',
    regButtons = false,
    bgimg = '',
    styles = { color: '#fff' }
}) => {
    const { isAuth } = useSelector(authSelector)

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
            {regButtons && !isAuth && <AuthForm />}
        </Wrap>
    )
}

export default memo(Section)