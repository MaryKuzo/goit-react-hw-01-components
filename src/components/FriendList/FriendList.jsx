import PropTypes from 'prop-types';
import css from './FriendList.module.css'
export const FriendsList = ({friends}) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.item}
            key={id}>
             <span className={`${css.status} ${isOnline ? css.status_true : css.status_false}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
          </li>
        )
      })}
    </ul>
  )
}

FriendsList.propType = {
  friends: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
  }).isRequired
}
