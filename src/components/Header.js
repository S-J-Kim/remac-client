import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <HeaderContainer>
      <MainImage src={process.env.PUBLIC_URL + 'mainlogo.svg'} />
      <UserIcon src={process.env.PUBLIC_URL + 'usericon.svg'} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  padding: 0 1.5rem;
  width: 100%;
  height: 5.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
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
