const logToConsole = storeApi => 
    next => 
        action => {
            console.log('Dispatching action:', action)

            const result = next(action)

            console.log('Store state after update:', storeApi.getState())

            return result
        }

export default logToConsole