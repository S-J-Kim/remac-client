import SectionHeader from './components/SectionHeader';
import React from 'react';
import Button from './components/Buttons';
import { Title, Paragraph } from './components/Text';
import styled from 'styled-components';
import { Container } from './components/Container';

const ProfileImageApply = (props) => {
  return (
    <Container>
      <SectionHeader title="프로필사진 등록" />
      <ContentContainer>
        <ProfileImage src={process.env.PUBLIC_URL + 'favicon.ico'} />
        <Title size="md">리퀘스터이름명</Title>
        <Description size="sm">
          회원님을 대표하는 사진을 등록해주세요!
        </Description>
        <Button type="activate" content="프로필사진 등록" />
        <SkipButton content="건너뛰기" />
      </ContentContainer>
    </Container>
  );
};

const ContentContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 100%;
  background: rgba(229, 229, 229, 0.29);
  border: 1px solid #d2d6da;
  margin-top: 7.5rem;
  margin-bottom: 3.5rem;
`;

const Description = styled(Paragraph)`
  margin-top: 8px;
  margin-bottom: 11.2rem;
`;

const SkipButton = styled(Button)`
  margin-top: 12px;
`;

export default ProfileImageApply;
