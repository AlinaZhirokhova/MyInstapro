import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <div className={s.header}>
            <NavLink to="/" className={s.title}>instapro</NavLink>
            <button className={s.button}>
                <div title='Добавить пост' className={s.buttonAddPost}></div>
            </button>
            <NavLink to="/login" className={s.buttonLogin}>Войти</NavLink>
           
        </div>
    )
}