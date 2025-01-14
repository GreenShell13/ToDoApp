import AuthReducer from './pages/home/reducer/slice'

const initState = {}

function rootReducer(state = initState, action) {
    return {
        auth: AuthReducer(state.auth, action)
    }
}

export default rootReducer