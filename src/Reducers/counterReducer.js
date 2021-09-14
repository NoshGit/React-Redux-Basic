import { INCREAMENT, DECREAMENT } from "../Redux/actionNames";
const counterReducer = (state = 0, action) => {
    const payload = action.payload? action.payload : 1;
    switch (action.type) {
        case INCREAMENT:
            return state + payload
        case DECREAMENT:
            return state - payload
        default:
            return state
    }
}

export default counterReducer;