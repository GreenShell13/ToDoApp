import React, { memo } from 'react'

import { 
    Wrap, 
    ItemText, 
    RightTopButton
} from './styledComponents'

const Section = () => {
    return (
        <Wrap>
            <RightTopButton>
                <p style={{ opacity: 1, color: '#fff' }}>Войти</p>
            </RightTopButton>
            <ItemText>
                <h1 style={{ margin: 0, fontSize: '3rem' }}>Электронный Дневник</h1>
                <p>Планируй свой день и развивайся в своё удовольствие!</p>
            </ItemText>
        </Wrap>
    )
}

export default memo(Section)