import styled from 'styled-components';
import { FriendListItem } from './FriendListItem';

const UlList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  backgroundcolor: beige;
`;

export const FriendList = ({ friends }) => {
  return (
    <UlList>
      {friends.map(item => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </UlList>
  );
};
