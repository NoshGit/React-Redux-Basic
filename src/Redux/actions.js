import { INCREAMENT, DECREAMENT, SIGN_IN, SIGN_OUT } from "./actionNames";

export const increament  = (num) => {
    return {
        type: INCREAMENT,
        payload: num
    }
};

export const decrement = () => {
    return {
        type: DECREAMENT
    }
};


export const login = () => {
    return {
        type: SIGN_IN
    }
};

export const logout = () => {
    return {
        type: SIGN_OUT
    }
};



  