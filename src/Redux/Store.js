import { applyMiddleware, createStore, combineReducers } from 'redux'
import AuthorizationReducer from '../Pages/Authorization/AuthorizationReducer';
import RegistrationReducer from '../Pages/Registration/RegistrationReducer';
import UsersReducer from '../Pages/UsersListPage/UsersReducer';
import UserDataPageReducer from '../Pages/UserDataPage/UserDataPageReducer';
import UserEditDataPageReducer from '../Pages/UserEditPage/UserEditDataPageReducer';
import thunk from 'redux-thunk';


const reducer = combineReducers({
    authorization: AuthorizationReducer,
    registration: RegistrationReducer,
    reception: UsersReducer,
    receptionUserId: UserDataPageReducer,
    editPage: UserEditDataPageReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

window.store = store



export default store

