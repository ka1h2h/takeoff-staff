import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registr } from "./Redux/Actions"



const Registration = (props) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkEmail, setCheckEmail] = useState(false)
    const [checkPassword, setCheckPassword] = useState(false)
    const [emailError, setEmailError] = useState('* e-mail не может быть пустым')
    const [passwordError, setPasswordError] = useState('* пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)


    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setCheckEmail(true);
                break
            case 'password':
                setCheckPassword(true);
                break
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('* некорректный email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('* пароль должен быть не менее 3 и не более 8')
            if (!e.target.value) {
                setPasswordError('* пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }
    const dispatch = useDispatch()





    return (
        <form>
            {(checkEmail && emailError) ? <p className="error">{emailError}</p> : <label>E-mail</label>}
            <input onChange={emailHandler} value={email} onBlur={e => blurHandler(e)} type='text' name='email' />
            {(checkPassword && passwordError) ? <p className="error">{passwordError}</p> : <label>Пароль</label>}
            <input onChange={passwordHandler} value={password} onBlur={e => blurHandler(e)} type='password' name='password' />
            <button disabled={!formValid} onClick={() => dispatch(registr(email, password))} type='submit'>Зарегистрироваться</button>
        </form>
    )
}

export default Registration