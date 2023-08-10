import React, { memo } from 'react'
import styled from 'styled-components'

import MountainLake from '../../../assets/images/mountain-lake.avif'

const Wrap = styled.div`
    flex-grow: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${MountainLake});
`

const Section = () => {
    return <Wrap>
        <div>Section</div>
    </Wrap>
}

export default memo(Section)