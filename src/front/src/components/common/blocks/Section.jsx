import React, { memo } from 'react'

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
    bgImg = '',
    styles = { color: '#fff' }
}) => {
    return (
        <Wrap bgImg={bgImg}>
            <TopBar>
                <h1>𝕲𝖗𝖊𝖊𝖓𝕱𝖑𝖆𝖒𝖊</h1>
            </TopBar>
                <ItemText>
                    <h1 style={{ margin: 0, fontSize: '3rem', color: styles.color }}>{title}</h1>
                    <p>{subTitle}</p>
                </ItemText>
                {regButtons && <ButtonGroup>
                    <AuthButton>
                        <p style={{ opacity: 1, color: '#fff' }}>Войти</p>
                    </AuthButton>
                    <RegButton>
                        <p>Зарегистрироваться</p>
                    </RegButton>
                </ButtonGroup>}
        </Wrap>
    )
}

export default memo(Section)