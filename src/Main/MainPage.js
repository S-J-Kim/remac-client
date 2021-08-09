import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Container } from '../components/Container';
import RequestContainer from '../components/RequestContainer';
import { Title } from '../components/Text';

export default function MainPage() {
  const history = useHistory();
  const [selected, setSelected] = useState('');
  function handleSendButtonClick() {
    history.push('/request/form');
  }
  function handleCategoryFiltering(e) {
    console.log(e);
  }
  return (
    <div>
      <MainImage
        src={process.env.PUBLIC_URL + '/banner.svg'}
        onClick={() => history.push('/signup/creator')}
      />
      <Container>
        <MainTitle size="md" mb={2.1}>
          보고싶은 영상, <br />
          찾지만 말고 직접 요청해보세요
        </MainTitle>
      </Container>
      <CategoryContainer>
        <Category
          location={process.env.PUBLIC_URL + '/category/game.svg'}
          category="게임"
          handleCategoryClicked={handleCategoryFiltering}
          id={1}
        />
        <Category
          location={process.env.PUBLIC_URL + '/category/food.svg'}
          category="푸드"
          id={2}
        />
        <Category
          location={process.env.PUBLIC_URL + '/category/review.svg'}
          category="리뷰"
          id={3}
        />
        <Category
          location={process.env.PUBLIC_URL + '/category/music.svg'}
          category="음악"
          id={4}
        />
        <Category
          location={process.env.PUBLIC_URL + '/category/knowledge.svg'}
          category="학습"
          id={5}
        />
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

const MainImage = styled.img`
  width: 100%;
  margin-bottom: 1.6rem;
  background-color: #123412;
  object-fit: cover;
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
const Image = styled.div`
  height: 7rem;
  width: 7rem;
  object-fit: cover;
  border-radius: 50px;
  margin-bottom: 1.1rem;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Category = ({ location, category }) => {
  return (
    <StyledCategory>
      <Image>
        <img src={location} />
      </Image>
      <Title size="sm">{category}</Title>
    </StyledCategory>
  );
};
const MainTitle = styled(Title)`
  line-height: 26px;
`;
