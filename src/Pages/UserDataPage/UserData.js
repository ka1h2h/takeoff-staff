import s from './UserData.module.css'
import { useParams, Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { requestUserId } from './UserDataPageAction'


const UserData = (props) => {

    const { id } = useParams()

    const dispatch = useDispatch()
    const userDataId = useSelector(state => state.receptionUserId.users)
    console.log(userDataId)
    const store = useSelector(state => state.authorization.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if (store === false)
            navigate('/authorization')
    }, [])


    return (
        <div className={s.parentContainer}>
            <div className={s.userData}>
                <h3>Профиль пользователя</h3>
                <Link to={`/profiles/${id}/edit`}>
                    <button className={s.btnEdit}>Редактировать</button>
                </Link>
                {userDataId.id &&
                    <ul key={userDataId}>
                        <p>Name</p>
                        <li><input type="text" value={userDataId.name} readOnly /></li>
                        <p>User name</p>
                        <li><input type="text" value={userDataId.username} readOnly /></li>
                        <p>E-mail</p>
                        <li><input type="text" value={userDataId.email} readOnly /></li>
                        <p>Street</p>
                        <li><input type="text" value={userDataId.address.street} readOnly /></li>
                        <p>City</p>
                        <li><input type="text" value={userDataId.address.city} readOnly /></li>
                        <p>Zip code</p>
                        <li><input type="text" value={userDataId.address.zipcode} readOnly /></li>
                        <p>Phone</p>
                        <li><input type="text" value={userDataId.phone} readOnly /></li>
                        <p>Website</p>
                        <li><input type="text" value={userDataId.website} readOnly /></li>
                    </ul>
                }
                <button className={s.btnSend}>Отправить</button>
            </div>
        </div>
    )
}


export default UserData