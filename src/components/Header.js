import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Header = (props) => {
  const history = useHistory();
  function handleMypageClicked() {
    history.push('/mypage');
  }
  return (
    <HeaderContainer>
      <MainImage src={process.env.PUBLIC_URL + '/remac-logo-sm.png'} />
      <UserIcon
        src={process.env.PUBLIC_URL + '/usericon.svg'}
        onClick={handleMypageClicked}
      />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  padding: 0 1.6rem;
  width: 100%;
  height: 5.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  z-index: 9;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
`;

const MainImage = styled.img`
  width: 9rem;
`;

const UserIcon = styled.img`
  width: 2.7rem;
`;

export default Header;
