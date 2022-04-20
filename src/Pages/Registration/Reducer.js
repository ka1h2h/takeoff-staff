const REG_USER = 'REG_USER'

const initialState = {
    isReg: false
}

export const RegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REG_USER:
            return {
                ...state,
                ...action.data.email,
                isReg: true
            }
        default:
            return state
    }
}

export const setUserData = (email, isReg) => ({ type: REG_USER, data: { email, isReg } });


