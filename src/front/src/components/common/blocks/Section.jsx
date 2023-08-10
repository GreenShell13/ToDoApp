import React, { memo } from 'react'
import styled from 'styled-components'

import MountainLake from '../../../assets/images/mountain-lake.avif'

const Wrap = styled.div`
    flex-grow: 1;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${MountainLake});
`

const ItemText = styled.div`
    margin-top: 24vh;
    margin-left: 32vw;
    width: 36vw;
    height: 15vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    font-size: 1rem;
    opacity: 1;
    color: #fff;
`

const Section = () => {
    return (
        <Wrap>
            <ItemText>
                <h1 style={{ margin: 0, fontSize: '3rem' }}>Электронный Дневник</h1>
                <p>Планируй свой день и развивайся в своё удовольствие!</p>
            </ItemText>   
        </Wrap>
    )
}

export default memo(Section)