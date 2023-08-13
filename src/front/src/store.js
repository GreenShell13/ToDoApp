import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'
import AuthReducer from './pages/home/reducer/slice'

const store = configureStore({
    reducer: {
        root: rootReducer,
        auth: AuthReducer
    }
})

export default store