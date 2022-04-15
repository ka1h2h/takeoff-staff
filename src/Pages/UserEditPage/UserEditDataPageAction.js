
import axios from 'axios'
import { UserEditData } from './UserEditDataPageReducer'


export const receptionDataValue = (payload, id) => {
    return async dispatch => {
        try {
            const res = await axios.put(`http://localhost:3001/profiles/${id}`, {
                name: payload.name,
                username: payload.username,
                email: payload.email,
                address: {
                    street: payload.street,
                    city: payload.city,
                    zipcode: payload.zipcode
                },
                phone: payload.phone,
                website: payload.website
            })
                .then(res => dispatch(UserEditData(payload)))
        } catch (e) {
            alert(e)
        }
    }
}
