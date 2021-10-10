export const GET = 'GET';
export const ADD = 'ADD';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FALIURE = 'FALIURE'; 


export const loading = () => ({
    type: LOADING,
    payload
})

export const get = () => ({
    type: GET,
    payload
})

export const add = () => ({
    type: ADD,
    payload
})

export const success = () => ({
    type: SUCCESS,
    payload
})

export const failure = () => ({
    type: FALIURE,
    payload
})

