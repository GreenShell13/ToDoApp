import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'
import { logDispatch } from './reduxAddons'

const store = configureStore({
    reducer: rootReducer,
    enhancers: [logDispatch] 
})

export default store