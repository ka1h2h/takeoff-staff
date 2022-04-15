import React, { useEffect, useState } from 'react'
import s from './UserEditDataPage.module.css'
import { useDispatch, useSelector, connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { receptionDataValue } from './UserEditDataPageAction'

function UserEditDataPage(props) {



    const { id } = useParams()
    const store = useSelector(state => state.authorization.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if (store === false)
            navigate('/authorization')
    }, [])
    const userDataId = useSelector(state => state.receptionUserId.users)

    const formik = useFormik({
        initialValues: {
            name: userDataId.name,
            username: userDataId.username,
            email: userDataId.email,
            street: userDataId.address.street,
            city: userDataId.address.city,
            zipcode: userDataId.address.zipcode,
            phone: userDataId.phone,
            website: userDataId.website
        }
    })

    console.log(window.store.getState())
    const dispatch = useDispatch()


    return (
        <div className={s.parentContainer}>
            <div className={s.editUser}>
                <h3>Редактировать пользователя</h3>
                <form onSubmit={formik.handleSubmit}>
                    <ul>
                        <p>Name</p>
                        <li><input value={formik.values.name} onChange={formik.handleChange} name='name' type='text' /></li>
                        <p>User name</p>
                        <li><input value={formik.values.username} onChange={formik.handleChange} name='username' type='text' /></li>
                        <p>E-mail</p>
                        <li><input value={formik.values.email} onChange={formik.handleChange} name='email' type='email' /></li>
                        <p>Street</p>
                        <li><input value={formik.values.street} onChange={formik.handleChange} name='street' type='text' /></li>
                        <p>City</p>
                        <li><input value={formik.values.city} onChange={formik.handleChange} name='city' type='text' /></li>
                        <p>Zip code</p>
                        <li><input value={formik.values.zipcode} onChange={formik.handleChange} name='zipcode' type='text' /></li>
                        <p>Phone</p>
                        <li><input value={formik.values.phone} onChange={formik.handleChange} name='phone' type='text' /></li>
                        <p>Website</p>
                        <li><input value={formik.values.website} onChange={formik.handleChange} name='website' type='text' /></li>
                    </ul>
                    <button className={s.btnEdit} onClick={() => dispatch(receptionDataValue(formik.values, id))} type='sumbit'>Сохранить</button>
                </form>

            </div>
        </div>
    )

}


export default UserEditDataPage