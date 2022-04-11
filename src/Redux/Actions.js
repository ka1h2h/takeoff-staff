import axios from "axios"
import { setUserData, setUserLogin, usersRequest, changeUserData } from "./Reducer"


export const registr = (email, password) => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:3001/users', {
                email,
                password
            })
                .then(res => dispatch(setUserData(res.data.user)))
        } catch (e) {
            alert('Such user already exists')
        }
    }
}

export const autoriz = (email, password) => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:3001/login', {
                email,
                password
            })
                .then(res => dispatch(setUserLogin(res.data.user)))
        } catch (e) {
            alert('This user does not exist')
        }
    }
}

export const requestAllUsers = () => {
    return async dispatch => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users/')
                .then(res => dispatch(usersRequest(res.data)))
        } catch (e) {
            alert(e)
        }
    }
}

export const userRequestById = (id) => {
    return async dispatch => {
        try {
            await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => dispatch(changeUserData(res)))
        } catch (e) {
            alert(e)
        }
    }
}

