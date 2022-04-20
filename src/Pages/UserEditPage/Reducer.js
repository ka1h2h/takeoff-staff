export const USER_EDIT_DATA = 'USER_EDIT_DATA'

const initialState = {
    users: {},
    isAuth: false
}

export const UserEditDataPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_EDIT_DATA:
            return {
                ...state,
                isAuth: true,
                users: action.payload,

            }
        default:
            return state
    }
}

export const UserEditData = (payload) => ({ type: USER_EDIT_DATA, payload })

