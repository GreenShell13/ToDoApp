import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'
import { delayAuthMsg, logDispatch, logToConsole } from './reduxAddons'

const store = configureStore({
    reducer: rootReducer,
    middleware: [
        logToConsole,
        delayAuthMsg
    ],
    enhancers: [
        logDispatch
    ]
})

export default store