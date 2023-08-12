import React, { memo } from 'react'
import styled from 'styled-components'
import Section from '../../components/common/blocks/Section'

import MountainLakeFirst from '../../assets/images/mountain-lake-4.jpg'
import MountainLakeSecond from '../../assets/images/mountain-lake-3.jpg'
import MountainLakeThird from '../../assets/images/mountain-river.jpg'
import MountainLakeFourth from '../../assets/images/mountain-lake-2.jpg'

const Container = styled.div`
    height: 100vh;
`

const Home = () => {
    return (
        <Container>
            <Section 
                title='Электронный Дневник' 
                subTitle='Планируй свой день и развивайся в своё удовольствие!' 
                regButtons={true}
                bgimg={MountainLakeFirst}
            />
            <Section 
                title='Создавай и меняйся'
                styles={{ color: '#000' }}
                bgimg={MountainLakeSecond}
            />
            <Section 
                title='Будь собой в любом месте'
                styles={{ color: '#000' }}
                bgimg={MountainLakeThird}
            />
            <Section 
                title='И не забывай планировать!'
                styles={{ color: '#000' }}
                bgimg={MountainLakeFourth}
            />
        </Container>
    )
}

export default memo(Home)