import React, { useEffect, useState } from "react";
import Email from "./../Inputs/Email";
import Password from "./../Inputs/Password";
import s from './Authorization.module.css'
import { autoriz } from './Action'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";


const Authorization = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formValid, setFormValid] = useState(false)

    const thunk = useSelector(state => state.authorization.isAuth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleFormSubmit = e => {
        e.preventDefault();
    };

    useEffect(() => {
        if (thunk) {
            return navigate('/profiles')
        }
    })

    return (
        <div className={s.autorization}>

            <form onSubmit={handleFormSubmit}>
                <Email value={email} setValue={setEmail} type='email' name='email' />
                <Password value={password} setValue={setPassword} type='password' name='password' />
                <button onClick={() => dispatch(autoriz(email, password))} type='submit'>Войти</button>
                <div className={s.authorizationLink}>Нет аккаунта? <Link to='/'>Зарегистрироваться</Link></div>
            </form>
        </div>
    )

}

export default Authorization