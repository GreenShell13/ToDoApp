export const sender = 'Home'

export const authUrl = 'http://localhost:80/api/auth.php'

export const initState = {
    login: '',
    password: '',
    isAuth: false
}

const constants = {
    UPDATE_AUTH_PARAM: `${sender}/UPDATE_AUTH_PARAM`
}

export default constants