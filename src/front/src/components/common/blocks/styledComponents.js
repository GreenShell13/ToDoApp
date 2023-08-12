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
    background-image: url(${({ bgImg }) => bgImg});
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

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 6%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const AuthButton = styled.div`
    border-radius: 100px;
    background-color: #08bfff;
    width: 200px;
    color: #fff;
    opacity: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: 1rem;
    cursor: pointer;
    margin: 8px;
`

export const RegButton = styled(AuthButton)`
    background-color: white;
    color: #000;
    opacity: 0.8;
`

export const TopBar = styled.div`
    text-align: center;
    position: fixed;
`