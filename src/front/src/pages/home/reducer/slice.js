import { createSlice } from '@reduxjs/toolkit'

import { initState } from './constants'

const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        updateAuthParam: (state, action) => ({ ...state, ...action.payload })
    }
})

export const authFormSelector = state => state?.auth

export const {
    updateAuthParam
} = authSlice.actions

export default authSlice.reducer