import React, { useEffect, useState } from "react"
import s from './Registration.module.css'
import Email from "./../Inputs/Email";
import Password from "./../Inputs/Password";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { registr } from './Action'



const Registration = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formValid, setFormValid] = useState(false)
    const dispatch = useDispatch()
    const thunk = useSelector(state => state.registration.isReg)
    const navigate = useNavigate()

    const handleFormSubmit = e => {
        e.preventDefault();
    };

    useEffect(() => {
        if (thunk === true) {
            return navigate('/authorization')
        }
    })

    return (

        <div className={s.registration}>
            <form onSubmit={handleFormSubmit}>
                <Email value={email} setValue={setEmail} type='text' name='email' />
                <Password value={password} setValue={setPassword} type='password' name='password' />
                <button onClick={() => dispatch(registr(email, password))} type='submit'>Зарегистрироваться</button>
                <div className={s.authorizationLink}>Уже есть аккаунт? <Link to='/authorization'>Войти</Link></div>
            </form >
        </div>
    )
}

export default Registration