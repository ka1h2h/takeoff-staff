import * as actions from './ActionTypes'


let initialState = {
    email: '',
    isReg: false,
    isAuth: false,
    users: [],
    id: []
}




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.REG_USER:
            return {
                ...state,
                isReg: true
            }
        case actions.AUT_USER:
            return {
                ...state,
                ...action.data.email,
                isAuth: true
            }
        case actions.REQUEST_USERS:
            return {
                ...state, users: action.payload
            }
        case actions.CHANGE_USER_DATA:
            return { ...state, id: action.payload }
        default:
            return state;
    }
}

export const setUserData = (email, isReg) => ({ type: actions.REG_USER, data: { email, isReg } });
export const setUserLogin = (email, isAuth) => ({ type: actions.AUT_USER, data: { email, isAuth } });
export const usersRequest = (payload) => ({ type: actions.REQUEST_USERS, payload })
export const changeUserData = (payload) => ({ type: actions.CHANGE_USER_DATA, payload })

export default reducer



