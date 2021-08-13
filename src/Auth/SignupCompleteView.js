import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Title, Paragraph } from '../components/Text';
import Button from '../components/Buttons';
import { Container } from '../components/Container';
import { useAuth } from '../contexts/AuthContextProvider';
import { useLocation } from 'react-router-dom';

const SignupCompleteView = (props) => {
  const { history } = useAuth();
  const location = useLocation();
  const [account] = useState({
    userID: location.state?.username,
    nickname: location.state?.nickname,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Title size="lg" mt={7.8}>
        환영합니다 {account.nickname}님!
      </Title>
      {props.userType === 'req' ? (
        <SectionDesc size="lg" mt={1.5}>
          보고 싶었던 컨텐츠,
          <br />
          REMAC에서 바로 요청할 수 있어요.
        </SectionDesc>
      ) : (
        <SectionDesc size="lg">
          Remac과 함께한다는 사실을
          <br />
          구독자들에게 알려주세요!
        </SectionDesc>
      )}
      <Margin />
      <CreatedID size="xs" mb={1.5}>
        가입 아이디 : {account.userID}
      </CreatedID>
      <Button
        type="activate"
        content="홈으로 이동"
        onClick={() => history.push('/')}
      />
    </Container>
  );
};

const SectionDesc = styled(Paragraph)`
  line-height: 2.4rem;
`;

const Margin = styled.div`
  height: 21.4rem;
`;

const CreatedID = styled(Paragraph)`
  text-align: center;
`;

export default SignupCompleteView;
