import constants from "../../pages/home/reducer/constants"

const delayAuthMsg = () =>
    next =>
        action => {
            const result = next(action)
            if (action.type === constants.UPDATE_AUTH_PARAM) {
                setTimeout(() => {
                    console.log('Hi')
                }, 2000)
            }
            return result
        }

export default delayAuthMsg