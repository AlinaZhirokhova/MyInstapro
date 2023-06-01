import s from './TapeItem.module.css'

export const TapeItem = ({tape}) => {
    return (
        <li id={tape.id} key={tape.id}>
            <div className={s.postHeader}>
                <img className={s.postAvatar} src={tape.user.imageUrl} alt="avatar" />
                <p>{tape.user.name}</p>
            </div>
            <div>
                <img src={tape.imageUrl} alt="" />
            </div>
            <div>
                <button className={s.buttonLike}>
                    <img src='https://glebkaf.github.io/webdev-cw-instapro/assets/images/like-not-active.svg' alt="like" />
                </button>
                <p>Нравится: {tape.likes.length}</p>
            </div>
            <p>
                <span>{tape.user.name}</span> {tape.description}
            </p>
        </li>
    )
}