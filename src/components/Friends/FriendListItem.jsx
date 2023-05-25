import styled from 'styled-components';

const LiItem = styled.li`
  width: 300px;
  display: flex;
  gap: 18px;
  align-items: center;
  border: 2px solid black;
  padding: 12px 25px;
`;

const AvatarImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10;
`;

const NameP = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
`;
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <LiItem>
      <span className="status">{isOnline}</span>
      <AvatarImg src={avatar} alt="User avatar" />
      <NameP>{name}</NameP>
    </LiItem>
  );
};
