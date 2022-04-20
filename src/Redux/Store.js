import { applyMiddleware, createStore, combineReducers } from 'redux'
import { AuthorizationReducer } from '../Pages/Authorization/Reducer';
import { RegistrationReducer } from '../Pages/Registration/Reducer';
import { UsersReducer } from '../Pages/UsersListPage/Reducer';
import { UserDataPageReducer } from '../Pages/UserDataPage/Reducer';
import { UserEditDataPageReducer } from '../Pages/UserEditPage/Reducer';
import thunk from 'redux-thunk';


const reducer = combineReducers({
    authorization: AuthorizationReducer,
    registration: RegistrationReducer,
    reception: UsersReducer,
    receptionUserId: UserDataPageReducer,
    editPage: UserEditDataPageReducer
})

const store = createStore(reducer, applyMiddleware(thunk));


export default store

