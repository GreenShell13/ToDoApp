import { combineReducers } from 'redux'
import AuthReducer from './pages/home/reducer/slice'
import { monitorName, monitorReducer } from './pages/Monitor'

const initState = {}

function rootReducer(state = initState, action) {
    return {
        auth: AuthReducer(state.auth, action),
        [monitorName]: monitorReducer(state[monitorName], action)
    }
}

const rootReducer2 = combineReducers({
    auth: AuthReducer,
    [monitorName]: monitorReducer
})

export {
    rootReducer as legacyRootReducer,
    rootReducer2 as newRootReducer
}

export default rootReducer2