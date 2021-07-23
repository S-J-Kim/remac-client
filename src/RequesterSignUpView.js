import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './components/Buttons';
import Input from './components/Inputs';
import SectionHeader from './components/SectionHeader';

export default function JoinView() {
  const [buttonType, setButtonType] = useState('deactivate');
  const [joinData, setJoinData] = useState({
    id: '',
    password: '',
    nickname: '',
  });
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [eventFlag, setEventFlag] = useState(false);
  function joinButtonClicked(e) {
    if (!passwordCheck) alert('비밀번호를 확인해주세요');
    else if (joinData['id'].length < 6 || joinData['id'].length > 12)
      alert('아이디가 조건에 맞지 않습니다.\n6자 이상 12자 이하');
    else if (checkID(joinData['id']))
      alert(
        '아이디 조건에 맞지 않습니다.\n6자 이상 12자 이하, 영문, 숫자만 입력 가능'
      );
    else if (
      joinData['password'].length < 8 ||
      joinData['password'].length > 12
    )
      alert('비밀번호가 조건에 맞지 않습니다.\n8자 이상 12자 이하');
    else if (
      joinData['nickname'].length < 2 ||
      joinData['nickname'].length > 12
    )
      alert(
        '닉네임이 조건에 맞지 않습니다.\n2자 이상 12자 이하, 한글, 영문, 숫자만 입력 가능'
      );
    else if (checkNickname(joinData['nickname']))
      alert('닉네임에 특수문자는 입력할 수 없습니다.');
    else console.log(joinData);
  }
  function handleInputChange(e, inputID) {
    setEventFlag(true);
    if (inputID === 0)
      setJoinData((prevData) => ({ ...prevData, id: e.target.value }));
    else if (inputID === 1)
      setJoinData((prevData) => ({ ...prevData, password: e.target.value }));
    else setJoinData((prevData) => ({ ...prevData, nickname: e.target.value }));
  }
  function handlePasswordCheck(e) {
    if (e.target.value === joinData['password']) setPasswordCheck(true);
    else setPasswordCheck(false);
  }
  useEffect(() => {
    setButtonType('activate');
    for (var key in joinData) {
      if (joinData[key] === '') setButtonType('deactivate');
    }
    setEventFlag(false);
  }, [eventFlag]);
  return (
    <Container>
      <div>
        <SectionHeader title="회원가입" />
      </div>
      <div>
        아이디<span>*</span>
      </div>
      <Input
        onChange={(e) => handleInputChange(e, 0)}
        placeholder="6자 이상 12자 이하"
      />
      <div>
        비밀번호<span>*</span>
      </div>
      <Input
        onChange={(e) => handleInputChange(e, 1)}
        placeholder="8자 이상 12자 이하 "
        type="password"
      />
      <div>
        비밀번호 확인<span>*</span>
      </div>
      <Input
        onChange={handlePasswordCheck}
        placeholder="비밀번호를 확인해주세요."
        type="password"
      />
      <div>
        닉네임<span>*</span>
      </div>
      <Input
        onChange={(e) => handleInputChange(e, 2)}
        placeholder="2글자 이상 12글자 이하, 한글, 영문, 숫자 입력 가능"
      />
      <Button
        content="가입완료"
        type={buttonType}
        onClick={joinButtonClicked}
      />
    </Container>
  );
}
function checkNickname(str) {
  const regExp = /[^가-힣a-zA-Z0-9]/g;
  if (regExp.test(str)) {
    return true;
  } else {
    return false;
  }
}
function checkID(str) {
  const regExp = /[^a-zA-Z0-9]/g;
  if (regExp.test(str)) {
    return true;
  } else {
    return false;
  }
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
