export const CHANGE_USER_DATA_PAGE = 'CHANGE_USER_DATA'

const initialState = {
    isAuth: false,
    users: {}
}

export const UserDataPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER_DATA_PAGE:
            return {
                ...state,
                users: action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

export const changeUserDataPage = (payload) => ({ type: CHANGE_USER_DATA_PAGE, payload })
