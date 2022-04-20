import axios from "axios"
import { setUserData } from "./Reducer"

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