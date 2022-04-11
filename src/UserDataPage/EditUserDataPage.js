import React, { useEffect, useState } from 'react'
import s from './EditUserDataPage.module.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function EditUserDataPage(props) {


    const store = useSelector(state => state.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if (store === false)
            navigate('/autorization')
    }, [])
    const userDataId = useSelector(state => state.id.data)

    console.log(store)

    return (
        <div className={s.parentContainer}>
            <div className={s.editUser}>
                <h3>Редактировать пользователя</h3>
                {userDataId &&
                    <form>
                        <ul>
                            <p>Name</p>
                            <li><input value={userDataId.name} name='name' type='text' /></li>
                            <p>User name</p>
                            <li><input value={userDataId.username} name='username' type='text' /></li>
                            <p>E-mail</p>
                            <li><input value={userDataId.email} name='email' /></li>
                            <p>Street</p>
                            <li><input value={userDataId.address.street} name='street' type='text' /></li>
                            <p>City</p>
                            <li><input value={userDataId.address.city} name='city' type='text' /></li>
                            <p>Zip code</p>
                            <li><input value={userDataId.address.zipcode} name='zipcode' type='number' /></li>
                            <p>Phone</p>
                            <li><input value={userDataId.phone} name='phone' type='number' /></li>
                            <p>Website</p>
                            <li><input value={userDataId.website} name='website' type='text' /></li>
                        </ul>
                        <button className={s.btnEdit} type='sumbit'>Сохранить</button>
                    </form>}

            </div>
        </div>
    )

}

export default EditUserDataPage