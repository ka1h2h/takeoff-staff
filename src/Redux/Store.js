import { applyMiddleware, createStore } from 'redux'
import reducer from './Reducer';
import thunk from 'redux-thunk';



const store = createStore(reducer, applyMiddleware(thunk));

window.store = store



export default store

