import styled from 'styled-components'

export const Wrap = styled.div`
    flex-grow: 1;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${({ bgimg }) => bgimg});
`

export const ItemText = styled.div`
    margin-top: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    opacity: 1;
    color: #fff;
    text-transform: uppercase
    height: 15vh;
    @media (max-width: 768px) {
        width: 36vw;
        height: 15vh;
    }
`

export const MenuWrap = styled.div`

`

export const TopBar = styled.div`
    text-align: center;
    position: fixed;
`

