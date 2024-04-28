import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const friendStatus = clsx(css.status, isOnline ? css.online : css.ofline);

  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={friendStatus}>{isOnline ? 'Online' : 'Ofline'}</p>
    </div>
  );
}
