const AUT_USER = 'AUT_USER'

const initialState = {
    isAuth: false
}

const AuthorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUT_USER:
            return {
                ...state,
                ...action.data.email,
                isAuth: true
            }
        default:
            return state
    }
}



export const setUserLogin = (email, isAuth) => ({ type: AUT_USER, data: { email, isAuth } });

export default AuthorizationReducer
