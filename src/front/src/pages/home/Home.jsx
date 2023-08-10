import React, { memo } from 'react'
import styled from 'styled-components'
import Section from '../../components/common/blocks/Section'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const Home = () => {
    return (
        <Container>
            <Section />
        </Container>
    )
}

export default memo(Home)