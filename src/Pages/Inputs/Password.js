import React, { useState } from 'react'
import s from './Inputs.module.css'

const Password = (props) => {

    const [checkPassword, setCheckPassword] = useState(false)
    const [passwordError, setPasswordError] = useState('* пароль не может быть пустым')

    const passwordHandler = (e) => {
        props.setValue(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('* пароль должен быть не менее 3 и не более 8')
            if (!e.target.value) {
                setPasswordError('* пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'password':
                setCheckPassword(true);
                break
        }
    }

    return (
        <div>
            {(checkPassword && passwordError) ? <p className={s.error}>{passwordError}</p> : <label>Пароль</label>}
            <input value={props.value} onChange={passwordHandler} onBlur={e => blurHandler(e)}
                type={props.type} name={props.name} />
        </div>
    )
}

export default Password