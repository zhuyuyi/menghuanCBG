let initialState = {
    data: {}
}

const indexPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_API': {
            return {
                data: action.data
            }
        }
        default:
            return state;
    }
}

export default indexPageReducer;