import styled from 'styled-components'

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
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: 1rem;
    cursor: pointer;
    margin: 8px;
    &:hover {
        opacity: 1
    }
    &:active {
        transform: scale(0.96);
        box-shadow: 3px 2px 22px 1px rgba(153, 204, 255, 0.7);
    }
`

export const RegButton = styled(AuthButton)`
    background-color: white;
    color: #000;
    opacity: 0.8;
`

export const AuthForm = styled.div`
    background-color: #F0F8FF;
    display: flex;
    flex-direction: column;
    height: 165px;
    width: 270px;
    border-radius: 20px;
    opacity: 0.9;
    &:hover {
        box-shadow: 3px 2px 22px 10px rgba(153, 204, 255, 0.3);
    }
`