import { createSlice } from '@reduxjs/toolkit'

import constants, { initState, domainName } from './constants'

const authSlice = createSlice({
    name: domainName,
    initialState: initState,
    reducers: {
        [constants.UPDATE_AUTH_PARAM.split('/')[1]]: (state, action) => ({ ...state, ...action.payload })
    }
})

export const authSelector = state => state?.[domainName]

export const {
    [constants.UPDATE_AUTH_PARAM.split('/')[1]]: updateAuthParam
} = authSlice.actions

export default authSlice.reducer