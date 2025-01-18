import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'
import { logDispatch, logToConsole } from './reduxAddons'

const store = configureStore({
    reducer: rootReducer,
    middleware: () => [
        logToConsole
    ],
    enhancers: [
        logDispatch
    ]
})

export default store