import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { Title, Paragraph } from '../components/Text';
import { useAuth } from '../contexts/AuthContextProvider';
import RequestList from './RequestList';
import { Fetchers } from '../fetchers/index';

const Mypage = (props) => {
  const [userInfo, setUserInfo] = useState({
    userAccount: '',
    userNickname: '',
    userID: '',
    userProfileImage: '',
    channelCategory: '',
    channelDiscription: '',
    isCreator: '',
    requests: [],
  });

  const { authToken, history, setAuthToken } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
    Fetchers.getUserDetail({
      headers: {
        Authorization: `Bearer ${authToken.access}`,
      },
    }).then((res) => {
      console.log(res);
      setUserInfo({
        userAccount: `${res.bank} ${res.account}`,
        userNickname: res.nickname,
        userID: res.username,
        userProfileImage: res.profile_image,
        channelCategory: res.channel_category,
        channelDiscription: res.channel_intro,
        isCreator: res.is_creator,
        requests: res.requests,
      });
    });
  }, []);
  return (
    <Container>
      <SectionHeader title="마이페이지" handleGoBack={() => history.goBack()} />
      <UserInfoSection>
        <UserProfileImage src={userInfo.userProfileImage} />
        <Title size="md" mt={1.3}>
          {userInfo.userNickname}
        </Title>
        <UserInfoContainer>
          <CreatorData size="xs">{userInfo.userID}</CreatorData>
          {userInfo.isCreator && (
            <>
              <HorizontalDivider />
              <CreatorData size="xs">{userInfo.userAccount}</CreatorData>
            </>
          )}
        </UserInfoContainer>
        {userInfo.isCreator && (
          <ChannelDiscriptionContainer>
            <Title size="sm">{userInfo.channelCategory}</Title>
            <HorizontalDivider />
            <ChannelDiscription size="md">
              {userInfo.channelDiscription}
            </ChannelDiscription>
          </ChannelDiscriptionContainer>
        )}
      </UserInfoSection>
      <RequestList
        requests={userInfo.requests}
        username={userInfo.userNickname}
      />
      <Logout
        onClick={(e) => {
          setAuthToken('');
          history.push('/');
        }}
      >
        로그아웃
      </Logout>
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
const Logout = styled.div`
  margin-top: 4rem;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: ${(props) => props.theme.colors.gray};
`;
export default Mypage;
