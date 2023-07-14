import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ id, avatar, isOnline, name }) => {
  return (
    <li className={css.item} key={id}>
      <span className={`${css.status} ${isOnline ? css.status_true : css.status_false}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};


