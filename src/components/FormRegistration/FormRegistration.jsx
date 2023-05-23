import s from '../FormLogin/FormLogin.module.css'
import style from './FormRegistration.module.css'
import { NavLink } from 'react-router-dom'

export const FormRegistration = () => {
    return (
        <div className={s.form}>
            <h2  className={s.form_title}>Регистрация в instapro</h2>
            <div className={s.form_inputs}>
                <label for="photo" className={style.form_label}>
                    <input className={style.form_input_file} type="file" id="photo" name="photo" accept="image/png, image/jpeg"/>
                    Выберите фото
                </label>
                <input className={s.form_input} type="text" placeholder='Имя'/>
                <input className={s.form_input} type="text" placeholder='Логин'/>
                <input className={s.form_input} type="password" placeholder='Пароль' />
                <button className={s.form_button}>Зарегистрироваться</button>
            </div>
            <div className={s.footer}>
                <p className={s.footer_title}>Уже есть аккаунт?</p>
                <NavLink to="/login" className={s.footer_link}>Войти</NavLink>
            </div>
        </div>
    )
}