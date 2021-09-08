export const increament  = (num) => {
    return {
        type: 'INCREAMENT',
        payload: num
    }
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
};



  