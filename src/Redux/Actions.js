import axios from "axios"
import { setUserData } from "./Reducer"



export const registr = (email, password) => {
    return dispatch => {
        debugger
        axios.post('http://localhost:3001/users', {
            email,
            password
        })
            .then(res => dispatch(setUserData(res.data.user)))
    }
}