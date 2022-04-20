import axios from "axios"
import { changeUserDataPage } from "./Reducer"

export const requestUserId = (id) => {
    return async dispatch => {
        try {
            const res = await axios.get(`http://localhost:3001/profiles/${id}`)
                .then(res => dispatch(changeUserDataPage(res.data)))
        } catch (e) {
            alert(e)
        }
    }
}

