import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Container } from './components/Container';
import RequestContainer from './components/RequestContainer';
import { Paragraph, Title } from './components/Text';

export default function MainPage() {
  const history = useHistory();
  function handleSendButtonClick() {
    history.push('/request/form');
  }
  return (
    <div>
      <MainImage />
      <Container>
        <MainTitle size="md" mb={2.1}>
          보고싶은 영상, <br />
          찾지만 말고 직접 요청해보세요
        </MainTitle>
      </Container>
      <CategoryContainer>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </CategoryContainer>
      <Container>
        <RequestContainer
          handleSendButtonClick={handleSendButtonClick}
          imageURL={process.env.PUBLIC_URL + '/sample.jpeg'}
          nickname="보리의하루"
          category="동물"
          intro="강화도 보더콜리 보리의 우당탕탕 견생"
        />
        <RequestContainer handleSendButtonClick={handleSendButtonClick} />
        <RequestContainer handleSendButtonClick={handleSendButtonClick} />
        <RequestContainer handleSendButtonClick={handleSendButtonClick} />
      </Container>
    </div>
  );
}

const MainImage = styled.div`
  height: 22.2rem;
  margin-bottom: 1.6rem;
  background-color: #123412;
`;
const CategoryContainer = styled.div`
  display: flex;
  overflow: scroll;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0 0.5rem 3.7rem 1.6rem;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const StyledCategory = styled.div`
  min-width: 7rem;
  margin-right: 1.1rem;
  text-align: center;
`;
const Image = styled.img`
  height: 7rem;
  width: 7rem;
  object-fit: cover;
  border-radius: 30px;
  margin-bottom: 1.1rem;
`;
const Category = () => {
  return (
    <StyledCategory>
      <Image />
      <Title size="sm">푸드</Title>
    </StyledCategory>
  );
};
const MainTitle = styled(Title)`
  line-height: 26px;
`;
