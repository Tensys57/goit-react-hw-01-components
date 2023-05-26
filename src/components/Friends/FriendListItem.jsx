import styled from 'styled-components';
import PropTypes from 'prop-types';

const LiItem = styled.li`
  width: 300px;
  display: flex;
  gap: 18px;
  align-items: center;
 
  padding: 12px 25px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
}
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

const StatusSp = styled.span``;

const OnlineSp = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
`;

const OfflineSp = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <LiItem>
      <StatusSp>
        {isOnline ? <OnlineSp></OnlineSp> : <OfflineSp></OfflineSp>}
      </StatusSp>
      <AvatarImg src={avatar} alt="User avatar" />
      <NameP>{name}</NameP>
    </LiItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
