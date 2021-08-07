import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Buttons';
import Input from '../components/Inputs';
import SectionHeader from '../components/SectionHeader';
import { Container } from '../components/Container';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonType, setButtonType] = useState('deactivate');
  const [eventFlag, setEventFlag] = useState(false);
  function handleInputChange(e, inputID) {
    setEventFlag(true);
    if (inputID === 0) setUsername(e.target.value);
    else setPassword(e.target.value);
  }
  function loginButtonClicked(e) {
    console.log(username, password);
  }

  useEffect(() => {
    if (username && password) setButtonType('activate');
    else setButtonType('deactivate');
    setEventFlag(false);
  }, [eventFlag]);
  return (
    <Container>
      <SectionHeader title={'로그인'} mt={2.8} mb={6.9} />
      <InputName>아이디</InputName>
      <Input
        mb={1.4}
        onChange={(e) => handleInputChange(e, 0)}
        value={username}
        placeholder="6자 이상 12자 이하"
      />
      <InputName>비밀번호</InputName>
      <Input
        mb={4}
        type="password"
        onChange={(e) => handleInputChange(e, 1)}
        value={password}
        placeholder="8자 이상 12글자 이하 "
      />
      <Button
        mb={1.2}
        type={buttonType}
        content="로그인"
        onClick={loginButtonClicked}
      />
      <Button mb={2} content="회원가입" onClick={loginButtonClicked} />

      <CreatorJoinButton>크리에이터 회원가입</CreatorJoinButton>
    </Container>
  );
}

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
const CreatorJoinButton = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-decoration-line: underline;
  color: #94999e;
`;
