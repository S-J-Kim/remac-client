import React from 'react';
import styled from 'styled-components';
import { Paragraph, Title } from './Text';

export default function RequestContainer({
  imageURL,
  nickname,
  category,
  intro,
  handleSendButtonClick,
  creatorId,
}) {
  const categories = {
    food: '푸드',
    game: '게임',
    music: '음악',
    knowledge: '학습',
    review: '리뷰',
  };
  return (
    <Container>
      <SubContainer>
        <ProfileImage src={imageURL} />
        <InfoContainer>
          <Title size="md" mb={0.3}>
            {nickname}
          </Title>
          <Paragraph size="sm" mb={0.3}>
            {categories[category]}
          </Paragraph>
          <Intro size="md">{intro}</Intro>
        </InfoContainer>
      </SubContainer>
      <SendButton id={creatorId} onClick={handleSendButtonClick}>
        요청보내기
      </SendButton>
    </Container>
  );
}

const Container = styled.div`
  height: 15.3rem;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 1rem;
`;
const SubContainer = styled.div`
  padding: 2.2rem 1.3rem 2rem;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f2f2f2;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
`;
const ProfileImage = styled.img`
  height: 6rem;
  width: 6rem;
  object-fit: cover;
  border-radius: 30px;
`;
const Intro = styled(Paragraph)`
  color: #292929;
`;
const SendButton = styled.button`
  border: none;
  background-color: #ffffff;
  width: 100%;
  height: 3.8rem;
  margin: 0.5rem 0;
  padding: 0;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #ec5f5f;
`;
