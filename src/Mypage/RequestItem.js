import React from 'react';
import styled from 'styled-components';
import { ProductionStatusIndicator } from '../components/Buttons';
import { Title, Paragraph } from '../components/Text';

const RequestItem = ({ request }) => {
  const { profileImage, title, username, reward, status, requestedAt } =
    request;

  return (
    <ItemContainer>
      <ProfileImage src={profileImage} />
      <ItemInfoSection>
        <ItemInfoRow>
          <RequestTitle size="xs">{title}</RequestTitle>
          <ProductionStatusIndicator>{status}</ProductionStatusIndicator>
        </ItemInfoRow>
        <ItemInfoRow>
          <Username size="md">{username}</Username>
        </ItemInfoRow>
        <ItemInfoRow>
          <Reward size="sm">{reward}원</Reward>
          <Paragraph size="xs">{requestedAt}</Paragraph>
        </ItemInfoRow>
      </ItemInfoSection>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  height: 6.6rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  //justify-content: space-between;
  gap: 1.1rem;
  margin-bottom: 4rem;
`;

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background: #dedede;
`;

const ItemInfoSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ItemInfoRow = styled.div`
  height: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RequestTitle = styled(Title)`
  font-weight: 400;
`;

const Username = styled(Paragraph)`
  font-size: 1.4rem;
`;

const Reward = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.black};
`;

export default RequestItem;
