import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import RequestContainer from '../components/RequestContainer';
import { Title } from '../components/Text';
import { useAuth } from '../contexts/AuthContextProvider';
import { Fetchers } from '../fetchers';

export default function MainPage() {
  const { authToken, history, setNickname, setUserId, setIsCreator } =
    useAuth();
  const [selected, setSelected] = useState('');
  const [creators, setCreators] = useState([]);
  const [filteredCreators, setFilteredCreators] = useState([]);
  function handleSendButtonClick(creatorInfo) {
    authToken
      ? history.push('/request/form', {
          creatorId: creatorInfo.id,
          creatorName: creatorInfo.nickname,
          category: creatorInfo.channel_category,
          profileImage: creatorInfo.profile_image,
        })
      : history.push('/login');
  }

  function handleCategoryClicked(e) {
    if (e.target.id === selected) setSelected('');
    else setSelected(e.target.id);
  }
  function shuffle(list) {
    var j, x, i;
    for (i = list.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      x = list[i - 1];
      list[i - 1] = list[j];
      list[j] = x;
    }
  }
  shuffle(creators);
  useEffect(() => {
    Fetchers.getCreators().then((creators) => setCreators(creators));
    if (authToken) {
      Fetchers.getUserInformation({ authToken: authToken.access }).then(
        (userData) => {
          setNickname(userData.nickname);
          setUserId(userData.id);
          setIsCreator(userData.is_creator);
        }
      );
    } else {
      setNickname('');
      setUserId();
      setIsCreator(false);
    }
  }, []);

  useEffect(() => {
    const filteredList = creators.filter(
      (creator) => creator.channel_category === selected
    );
    setFilteredCreators(filteredList);
  }, [selected]);

  return (
    <div>
      <MainImage
        src={process.env.PUBLIC_URL + '/remacmainbanner.png'}
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
          id="game"
          onClick={handleCategoryClicked}
          selected={selected}
        />
        <Category
          location={process.env.PUBLIC_URL + '/category/food.svg'}
          category="푸드"
          id="food"
          onClick={handleCategoryClicked}
          selected={selected}
        />
        <Category
          location={process.env.PUBLIC_URL + '/category/review.svg'}
          category="리뷰"
          id="review"
          onClick={handleCategoryClicked}
          selected={selected}
        />
        <Category
          location={process.env.PUBLIC_URL + '/category/music.svg'}
          category="음악"
          id="music"
          onClick={handleCategoryClicked}
          selected={selected}
        />
        <Category
          location={process.env.PUBLIC_URL + '/category/knowledge.svg'}
          category="학습"
          id="knowledge"
          onClick={handleCategoryClicked}
          selected={selected}
        />
      </CategoryContainer>
      <Container>
        {selected === ''
          ? creators.map((creator) => {
              return (
                <RequestContainer
                  handleSendButtonClick={() => handleSendButtonClick(creator)}
                  imageURL={creator.profile_image}
                  nickname={creator.nickname}
                  category={creator.channel_category}
                  intro={creator.channel_intro}
                  creatorId={creator.id}
                  key={creator.id}
                />
              );
            })
          : filteredCreators.map((creator) => {
              return (
                <RequestContainer
                  handleSendButtonClick={() => handleSendButtonClick(creator)}
                  imageURL={creator.profile_image}
                  nickname={creator.nickname}
                  category={creator.channel_category}
                  intro={creator.channel_intro}
                  creatorId={creator.id}
                  key={creator.id}
                />
              );
            })}
      </Container>
    </div>
  );
}

const MainImage = styled.img`
  width: 100%;
  margin-bottom: 1.6rem;
  background-color: #123412;
  object-fit: cover;
  -webkit-perspective: 1;
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
  color: ${(props) => props.theme.colors.pink};
`;

const StyledCategory = styled.div`
  min-width: 7rem;
  margin-right: 1.1rem;
  text-align: center;
`;
const ImageWrapper = styled.div`
  height: 7rem;
  width: 7rem;
  object-fit: cover;
  border-radius: 50px;
  margin-bottom: 1.1rem;
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.pink : props.theme.colors.white};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
`;
const IconImage = styled.img`
  width: 6.4rem;
`;
const CategoryLabel = styled(Title)`
  color: ${(props) =>
    props.isSelected ? props.theme.colors.pink : props.theme.colors.black};
  transition: 0.3s;
`;
const Category = ({ location, category, onClick, id, selected }) => {
  const isSelected = id === selected;
  return (
    <StyledCategory onClick={onClick}>
      <ImageWrapper isSelected={isSelected}>
        <IconImage src={location} id={id} />
      </ImageWrapper>
      <CategoryLabel size="sm" id={id} isSelected={isSelected}>
        {category}
      </CategoryLabel>
    </StyledCategory>
  );
};
const MainTitle = styled(Title)`
  line-height: 26px;
`;
