import React, { useState } from 'react'
import s from './Inputs.module.css'

const Email = (props) => {

    const [checkEmail, setCheckEmail] = useState(false)
    const [emailError, setEmailError] = useState('* e-mail не может быть пустым')

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setCheckEmail(true);
                break
        }
    }
    const emailHandler = (e) => {
        props.setValue(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('* некорректный email')
        } else {
            setEmailError('')
        }
    }

    return (
        <div>
            {(checkEmail && emailError) ? <p className={s.error}>{emailError}</p> : <label>E-mail</label>}
            <input value={props.value} onChange={emailHandler}
                onBlur={e => blurHandler(e)} type={props.type} name={props.name} />
        </div>
    )
}

export default Email