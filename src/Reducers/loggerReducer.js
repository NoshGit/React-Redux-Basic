import { SIGN_IN, SIGN_OUT } from "../Redux/actionNames";
const loggerReducer = (state = false, action) => {
    switch (action.type) {
        case SIGN_IN:
            return !state
        case SIGN_OUT:
            return !state
        default:
            return state
    }
}

export default loggerReducer;