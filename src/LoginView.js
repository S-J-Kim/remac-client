import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './components/Buttons';
import Input from './components/Inputs';
import SectionHeader from './components/SectionHeader';

export default function LoginView() {
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [buttonType, setButtonType] = useState('deactivate');
  const [eventFlag, setEventFlag] = useState(false);
  function handleInputChange(e, inputID) {
    setEventFlag(true);
    if (inputID === 0) setID(e.target.value);
    else setPassword(e.target.value);
  }
  function loginButtonClicked(e) {
    console.log(id, password);
  }

  useEffect(() => {
    if (id && password) setButtonType('activate');
    else setButtonType('deactivate');
    setEventFlag(false);
  }, [eventFlag]);
  return (
    <Container>
      <LoginHeader>
        <SectionHeader title={'로그인'} />
      </LoginHeader>
      <InputName>아이디</InputName>
      <IDInput
        onChange={(e) => handleInputChange(e, 0)}
        value={id}
        placeholder="6자 이상 12자 이하"
      />
      <InputName>비밀번호</InputName>
      <PasswordInput
        type="password"
        onChange={(e) => handleInputChange(e, 1)}
        value={password}
        placeholder="8자 이상 12글자 이하 "
      />
      <LoginButton>
        <Button
          type={buttonType}
          content="로그인"
          onClick={loginButtonClicked}
        />
      </LoginButton>
      <JoinButton>
        <Button content="회원가입" onClick={loginButtonClicked} />
      </JoinButton>
      <CreatorJoinButton>크리에이터 회원가입</CreatorJoinButton>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginHeader = styled.div`
  margin-bottom: 6.9rem;
`;

const InputName = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.8rem;
  /* identical to box height */

  color: #292929;
  margin-bottom: 0.8rem;
`;

const IDInput = styled(Input)`
  margin-bottom: 1.4rem;
`;
const PasswordInput = styled(Input)`
  margin-bottom: 4rem;
`;
const LoginButton = styled.div`
  margin-bottom: 1.2rem;
`;
const JoinButton = styled.div`
  margin-bottom: 2rem;
`;
const CreatorJoinButton = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-decoration-line: underline;
  color: #94999e;
`;
