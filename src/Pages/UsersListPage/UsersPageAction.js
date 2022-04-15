import axios from "axios"
import { usersRequest } from "./UsersReducer"


export const requestAllUsers = () => {
    return async dispatch => {
        try {
            const res = await axios.get('http://localhost:3001/profiles')
                .then(res => dispatch(usersRequest(res.data)))
        } catch (e) {
            alert(e)
        }
    }
}

