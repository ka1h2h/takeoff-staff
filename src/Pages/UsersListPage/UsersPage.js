import React, { useEffect } from 'react'
import s from './UsersPage.module.css'
import { useDispatch, useSelector, } from 'react-redux'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { requestAllUsers } from './UsersPageAction'

function Home() {
    const dispatch = useDispatch()
    const store = useSelector(state => state.authorization.isAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if (store === false)
            navigate('/authorization')
    }, [])

    useEffect(() => {
        dispatch(requestAllUsers())
    }, [])
    const thunk = useSelector(state => state.reception.users)
    console.log(thunk)



    return (
        <div className={s.parentContainer}>
            <div className={s.container}>
                <h3>Список пользователей</h3>
                {thunk.map((person) =>
                    <ul key={person.id}>
                        <li><span>Name:</span> {person.name}</li>
                        <li><span>City:</span> {person.address.city}</li>
                        <li><span>Company:</span> {person.phone}
                            <Link className={s.link} key={person.id} to={`/profiles/${person.id}`}>Подробнее</Link></li>
                    </ul>
                )}
            </div>
        </div >
    )
}

export default Home