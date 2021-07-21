import React, { useState, useEffect } from 'react';
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
      <div>remac</div>
      <div>로그인</div>
      <div>아이디</div>
      <Input onChange={(e) => handleInputChange(e, 0)} value={id} />
      <div>비밀번호</div>
      <Input
        type="password"
        onChange={(e) => handleInputChange(e, 1)}
        value={password}
      />
      <Button type={buttonType} content="로그인" onClick={loginButtonClicked} />
      <Button content="회원가입" onClick={loginButtonClicked} />
      <div>크리에이터 회원가입</div>
    </div>
  );
}
