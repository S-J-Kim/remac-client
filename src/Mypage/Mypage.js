import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductionStatusIndicator } from '../components/Buttons';
import { Container } from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { Title, Paragraph } from '../components/Text';
import { theme } from '../styles/theme';
import RequestList from './RequestList';

const Mypage = (props) => {
  const [userNickname] = useState('보리의하루');
  const [userID] = useState('csm1111');
  const [userAccount] = useState('신한 110486146544 (임성주)');
  const [channelCategory] = useState('동물');
  const [channelDiscription] = useState('강화도 보더콜리 보리의 우당탕탕 견생');
  const [isCreator, setIsCreator] = useState(true);

  return (
    <Container>
      <SectionHeader title="마이페이지" />
      <UserInfoSection>
        <UserProfileImage src={undefined} />
        <Title size="md" mt={1.3}>
          {userNickname}
        </Title>
        <UserInfoContainer>
          <CreatorData size="xs">{userID}</CreatorData>
          {isCreator && (
            <>
              <HorizontalDivider />
              <CreatorData size="xs">{userAccount}</CreatorData>
            </>
          )}
        </UserInfoContainer>
        <ChannelDiscriptionContainer>
          <Title size="sm">{channelCategory}</Title>
          <HorizontalDivider />
          <ChannelDiscription size="md">
            {channelDiscription}
          </ChannelDiscription>
        </ChannelDiscriptionContainer>
      </UserInfoSection>
      <RequestList />
    </Container>
  );
};

const UserInfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.6rem;
`;

const UserProfileImage = styled.img`
  width: 8.6rem;
  height: 8.6rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 100%;
  background: rgba(229, 229, 229, 0.29);
  object-fit: cover;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.6rem;
`;

const CreatorData = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.black};
`;

const ChannelDiscriptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.8rem;
  margin-top: 1.2rem;
  width: 100%;
  height: 3.7rem;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
`;

const ChannelDiscription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.black};
`;

const HorizontalDivider = styled.div`
  width: 0;
  height: 13px;
  border-left: 1px solid #bbbbbb;
  margin: auto 1rem;
`;

export default Mypage;
