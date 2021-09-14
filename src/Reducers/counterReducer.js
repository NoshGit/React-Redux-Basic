import { INCREAMENT, DECREAMENT } from "../Redux/actionNames";
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREAMENT:
            return state + action.payload
        case DECREAMENT:
            return state - 1
        default:
            return state
    }
}

export default counterReducer;