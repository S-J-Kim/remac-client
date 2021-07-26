import React, { useState } from 'react';
import styled from 'styled-components';
import { Title, Paragraph } from './components/Text';
import Button from './components/Buttons';
import { Container } from './components/Container';

const SignupCompleteView = (props) => {
  const [account] = useState({
    userID: 'testid1234',
    nickname: '리퀘공쥬쥬서영',
  });

  return (
    <Container>
      <SectionTitle size="lg">환영합니다 {account.nickname}님!</SectionTitle>
      {props.userType === 'req' ? (
        <SectionDesc size="lg">
          보고 싶었던 컨텐츠,
          <br />
          REMAC에서 바로 요청할 수 있어요.
        </SectionDesc>
      ) : (
        <SectionDesc size="lg"></SectionDesc>
      )}
      <WelcomeImage src="" />
      <CreatedID size="xs">가입 아이디 : {account.userID}</CreatedID>
      <Button type="activate" content="홈으로 이동" />
    </Container>
  );
};

const SectionTitle = styled(Title)`
  margin-top: 7.8rem;
`;

const SectionDesc = styled(Paragraph)`
  margin-top: 1.5rem;
  line-height: 2.4rem;
`;

const WelcomeImage = styled.img`
  width: 100%;
  height: 24.6rem;
  margin: 2.4rem auto;
`;

const CreatedID = styled(Paragraph)`
  margin-bottom: 1.5rem;
  text-align: center;
`;

export default SignupCompleteView;
