import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <li className="item">
          <span className="status">{item.isOnline}</span>
          <img
            className="avatar"
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{item.name}</p>
        </li>
        // <FriendListItem
        //   avatar="item.avatar"
        //   name="item.name"
        //   isOnline="item.isOnline"
        // />
      ))}
    </ul>
  );
};
