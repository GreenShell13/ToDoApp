import React, { memo } from 'react'

import { 
    Wrap, 
    ItemText, 
    AuthButton,
    TopBar,
    ButtonGroup,
    RegButton
    //, PreviewBox
} from './styledComponents'

const Section = () => {
    return (
        <Wrap>
            <TopBar>
                <h1>𝕲𝖗𝖊𝖊𝖓𝕱𝖑𝖆𝖒𝖊</h1>
            </TopBar>
                <ItemText>
                    <h1 style={{ margin: 0, fontSize: '3rem' }}>Электронный Дневник</h1>
                    <p>Планируй свой день и развивайся в своё удовольствие!</p>
                </ItemText>
                <ButtonGroup>
                    <AuthButton>
                        <p style={{ opacity: 1, color: '#fff' }}>Войти</p>
                    </AuthButton>
                    <RegButton>
                        <p>Зарегистрироваться</p>
                    </RegButton>
                </ButtonGroup>
        </Wrap>
    )
}

export default memo(Section)