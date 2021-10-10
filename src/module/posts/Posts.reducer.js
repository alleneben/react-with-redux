const initialState = {
    isLoading: false,
    posts: [],
    error: null
}

export default (state = initialState, {type, payload}) => {

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
