import * as actions from './ActionTypes'


let initialState = {
    email: " ",
    id: " "

}




const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.REG_USER:
            debugger
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}


export const setUserData = (email) => ({ type: actions.REG_USER, data: { email } });

export default reducer



