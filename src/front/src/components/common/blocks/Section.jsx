import React, { memo } from 'react'
import Fade from 'react-reveal/Fade'

import { 
    Wrap, 
    ItemText, 
    AuthButton,
    TopBar,
    ButtonGroup,
    RegButton
} from './styledComponents'

const Section = ({
    title = '',
    subTitle = '',
    regButtons = false,
    bgimg = '',
    styles = { color: '#fff' }
}) => {
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
                <Fade bottom>
                    <ButtonGroup>
                        <AuthButton>
                            <p style={{ opacity: 1, color: '#fff' }}>Войти</p>
                        </AuthButton>
                        <RegButton>
                            <p>Зарегистрироваться</p>
                        </RegButton>
                    </ButtonGroup>
                </Fade>
            }
        </Wrap>
    )
}

export default memo(Section)