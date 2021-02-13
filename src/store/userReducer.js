const initialState = {
    userType: 0,
    loggedIn: false
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_USER_TYPE":
        return {
            ...state,
            userType: action.payload
        }

        case "SET_LOG_IN":
        return {
            ...state,
            loggedIn: true
        }

        case "SET_LOG_OUT":
            return {
                ...state,
                loggedIn: false
            }

        default:
        return state;
    }
};

export default userReducer;