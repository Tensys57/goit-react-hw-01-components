import styled from 'styled-components';

const LiItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const AvatarImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10;
`;
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <LiItem>
      <span className="status">{isOnline}</span>
      <AvatarImg src={avatar} alt="User avatar" />
      <p className="name">{name}</p>
    </LiItem>
  );
};
