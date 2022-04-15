export const USER_EDIT_DATA = 'USER_EDIT_DATA'

const initialState = {
    isAuth: false,
    users: {}
}


const UserEditDataPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_EDIT_DATA:
            return {
                ...state,
                users: action.payload,
                isAuth: true
            }
        default:
            return state
    }
}



export const UserEditData = (payload) => ({ type: USER_EDIT_DATA, payload })

export default UserEditDataPageReducer