import axios from "axios"
import { setUserLogin } from './AuthorizationReducer'

export const autoriz = (email, password) => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:3001/login', {
                email,
                password
            })
                .then(res => dispatch(setUserLogin(res.data.user)))
        } catch (e) {
            alert(e)
        }
    }
}