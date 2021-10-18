const initialState = {
    isLoading: false,
    posts: [],
    error: null
}

const postReducer =  (state = initialState, {type, payload}) => {

    switch (type){
        case "DEPOSIT":
            return {
                state,
                payload
            }
        case "WITHDRAW":
            return {
                state, 
                payload
            }
        default:
            return state
    }
}

export default postReducer;