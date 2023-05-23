import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <FriendListItem
          avatar="item.avatar"
          name="item.name"
          isOnline="item.isOnline"
        />
      ))}
    </ul>
  );
};
