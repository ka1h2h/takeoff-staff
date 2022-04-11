import React, { useEffect } from 'react'
import s from './User.module.css'
import { useDispatch, useSelector, } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { requestAllUsers } from '../Redux/Actions'

function Home() {

    const dispatch = useDispatch()

    const store = useSelector(state => state.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if (store === false)
            navigate('/autorization')
    }, [])



    useEffect(() => {
        dispatch(requestAllUsers())
    }, [])
    const thunk = useSelector(state => state.users)


    return (
        <div className={s.parentContainer}>
            <div className={s.container}>
                <h3>Список пользователей</h3>
                {thunk.map((person) =>
                    <ul key={person.id}>
                        <li><span>Name:</span> {person.name}</li>
                        <li><span>City:</span> {person.address.city}</li>
                        <li><span>Company:</span> {person.company.name}
                            <Link className={s.link} key={person.id} to={`/users/${person.id}`}>Подробнее</Link></li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Home