import styled from 'styled-components'

//import MountainLake from '../../../assets/images/mountain-river.jpg'
//import MountainLake from '../../../assets/images/mountain-lake-3.jpg'
import MountainLake from '../../../assets/images/mountain-lake-4.jpg'

export const Wrap = styled.div`
    flex-grow: 1;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${MountainLake});
`

export const ItemText = styled.div`
    margin-top: 12vh;
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
    text-transform: uppercase
`

export const MenuWrap = styled.div`

`

export const RightTopButton = styled.div`
    margin-top: 2vh;
    margin-left: 93vw;
    border-radius: 100px;
    background-color: #08bfff;
    --border: 2px solid #fff;
    height: 5vh;
    width: 6vw;
    color: #fff;
    opacity: 1;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: 2vw;
    cursor: pointer;
`