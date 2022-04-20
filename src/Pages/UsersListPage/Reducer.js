const REQUEST_USERS = 'REQUEST_USERS'

const initialState = {
    isAuth: false,
    users: []
}

export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USERS:
            return {
                ...state,
                users: action.payload,
                isAuth: true
            }
        default:
            return state
    }


}

export const usersRequest = (payload) => ({ type: REQUEST_USERS, payload })

