import s from './FormLogin.module.css'
import { NavLink } from 'react-router-dom'

export const FormLogin = () => {
    return (
        <div className={s.form}>
            <h2  className={s.form_title}>Вход в instapro</h2>
            <div className={s.form_inputs}>
                <input className={s.form_input} type="text" placeholder='Логин'/>
                <input className={s.form_input} type="password" placeholder='Пароль' />
                <button className={s.form_button}>Войти</button>
            </div>
            <div className={s.footer}>
                <p className={s.footer_title}>Нет аккаунта?</p>
                <NavLink to="/registration" className={s.footer_link}>Зарегистрироваться</NavLink>
            </div>
        </div>
    )
}