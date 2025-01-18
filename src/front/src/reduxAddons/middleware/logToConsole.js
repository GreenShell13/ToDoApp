const logToConsole = storeApi => 
    next => 
        action => {
            console.log('Dispatching action:')
            console.log(action)

            const result = next(action)

            console.log('Store state after update:')
            console.log(storeApi.getState())
            
            return result
        }

export default logToConsole