import { createSlice } from "@reduxjs/toolkit"

import { domainName, initialState } from "./constants"

const slice = createSlice({
    name: domainName,
    initialState,
    reducers: {

    },
    selectors: {
        monitorSelector: state => state?.[domainName]
    }
})

export const {
    monitorSelector
} = slice.selectors || {}

export default slice.reducer