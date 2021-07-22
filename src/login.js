import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './components/Buttons';
import Input from './components/Inputs';

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
    console.log('hellod');
  }

  useEffect(() => {
    if (id && password) setButtonType('activate');
    else setButtonType('deactivate');
    setEventFlag(false);
  }, [eventFlag]);
  return (
    <div>
      <BackIcon>
        <BackIconImg src={process.env.PUBLIC_URL + '/backIcon.svg'} />
        로그인
      </BackIcon>
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
      <Button type={buttonType} content="로그인" onClick={loginButtonClicked} />
      <Button content="회원가입" onClick={loginButtonClicked} />
      <div>크리에이터 회원가입</div>
    </div>
  );
}
const BackIcon = styled.div`
  display: flex;
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.4rem;
  /* identical to box height */
  align-items: center;
  color: #292929;
  margin-top: 2.8rem;
  margin-bottom: 6.9rem;
`;
const BackIconImg = styled.img`
  margin-right: 1.1rem;
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
