import React, { useEffect } from 'react'
import s from './UserEditDataPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { receptionDataValue } from './Action'

const UserEditDataPage = (props) => {

    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const userDataId = useSelector(state => state.receptionUserId.users)
    const store = useSelector(state => state.receptionUserId.isAuth)
    useEffect(() => {
        if (!store)
            return navigate('/authorization')
    }, [])

    const sendHandler = () => {
        if (dispatch(receptionDataValue(formik.values, id)))
            return navigate(`/profiles/${id}`)
    }

    const formik = useFormik({
        initialValues: {
            name: userDataId.name,
            username: userDataId.username,
            email: userDataId.email,
            address: {
                street: userDataId.street,
                city: userDataId.city,
                zipcode: userDataId.zipcode,
            },
            phone: userDataId.phone,
            website: userDataId.website
        }
    })

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
                        <li><input value={formik.values.phone} onChange={formik.handleChange} name='phone' type='number' /></li>
                        <p>Website</p>
                        <li><input value={formik.values.website} onChange={formik.handleChange} name='website' type='site' /></li>
                    </ul>
                    <button className={s.btnEdit} onClick={() => sendHandler()} type='sumbit'>Сохранить</button>
                </form>
            </div>
        </div >
    )
}

export default UserEditDataPage