function logDispatch(createStore) {
    return (rootReducer, preloadedState, enhancers) => {
        const store = createStore(
            rootReducer, 
            preloadedState, 
            enhancers
        )

        const newDispatch = action => {
            const result = store.dispatch(action)
            console.log(result)
            return result
        }

        return {
            ...store,
            dispatch: newDispatch
        }
    }
}

export default logDispatch