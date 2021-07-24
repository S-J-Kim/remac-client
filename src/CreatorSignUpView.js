import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './components/Buttons';
import Input from './components/Inputs';
import SectionHeader from './components/SectionHeader';
import { Title, Paragraph } from './components/Text';

export default function CreatorSignUpView() {
  const [buttonType, setButtonType] = useState('deactivate');
  const [joinData, setJoinData] = useState({
    id: '',
    password: '',
    channelname: '',
    category: '',
    introduction: '',
    channellink: '',
    bank: '',
    bankaccount: '',
    depositor: '',
  });
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [eventFlag, setEventFlag] = useState(false);
  function joinButtonClicked(e) {
    if (!passwordCheck) alert('비밀번호를 확인해주세요');
    else console.log(joinData);
  }
  function handleInputChange(e, inputID) {
    setEventFlag(true);
    if (inputID === 0)
      setJoinData((prevData) => ({ ...prevData, id: e.target.value }));
    else if (inputID === 1)
      setJoinData((prevData) => ({ ...prevData, password: e.target.value }));
    else if (inputID === 2)
      setJoinData((prevData) => ({ ...prevData, channelname: e.target.value }));
    else if (inputID === 3)
      setJoinData((prevData) => ({ ...prevData, category: e.target.value }));
    else if (inputID === 4)
      setJoinData((prevData) => ({
        ...prevData,
        introduction: e.target.value,
      }));
    else if (inputID === 5)
      setJoinData((prevData) => ({ ...prevData, channellink: e.target.value }));
    else if (inputID === 6)
      setJoinData((prevData) => ({ ...prevData, bank: e.target.value }));
    else if (inputID === 7)
      setJoinData((prevData) => ({ ...prevData, bankaccount: e.target.value }));
    else if (inputID === 8)
      setJoinData((prevData) => ({ ...prevData, depositor: e.target.value }));
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
      <TitleContainer>
        <SectionHeader title="크리에이터 회원가입" />
      </TitleContainer>
      <SubContainer>
        <SubTitle size="md">회원정보</SubTitle>
        <InputText size="sm">
          아이디<Star>*</Star>
        </InputText>
        <InputBox
          onChange={(e) => handleInputChange(e, 0)}
          placeholder="6자 이상 12자 이하"
        />
        <InputText size="sm">
          비밀번호<Star>*</Star>
        </InputText>
        <InputBox
          onChange={(e) => handleInputChange(e, 1)}
          placeholder="6자 이상 12자 이하"
          type="password"
        />
        <InputText size="sm">
          비밀번호 확인<Star>*</Star>
        </InputText>
        <InputBox
          onChange={handlePasswordCheck}
          placeholder="비밀번호를 확인해주세요."
          type="password"
        />
      </SubContainer>
      <SubContainer>
        <SubTitle size="md">채널정보</SubTitle>
        <InputText size="sm">
          채널명<Star>*</Star>
        </InputText>
        <InputBox
          onChange={(e) => handleInputChange(e, 2)}
          placeholder="운영하는 유투브 채널명을 입력해주세요"
        />
        <InputText size="sm">
          카테고리<Star>*</Star>
        </InputText>
        <InputBox
          onChange={(e) => handleInputChange(e, 3)}
          placeholder="카테고리를 선택해주세요"
        />
        <InputText size="sm">
          한줄소개<Star>*</Star>
        </InputText>
        <InputBox
          onChange={(e) => handleInputChange(e, 4)}
          placeholder="4자 이상 20자 이하 작성"
        />
        <InputText size="sm">
          채널링크<Star>*</Star>
        </InputText>
        <InputBox
          onChange={(e) => handleInputChange(e, 5)}
          placeholder="운영하는 유투브 채널링크를 입력해주세요"
        />
      </SubContainer>
      <SubContainer>
        <SubTitle size="md">계좌정보</SubTitle>
        <InputText size="sm">
          은행<Star>*</Star>
        </InputText>
        <InputBox
          onChange={(e) => handleInputChange(e, 6)}
          placeholder="은행을 선택해주세요"
        />
        <InputText size="sm">
          계좌번호<Star>*</Star>
        </InputText>
        <InputBox
          onChange={(e) => handleInputChange(e, 7)}
          placeholder="-를 포함하지 않고 작성해주세요"
        />
        <InputText size="sm">
          입금자명<Star>*</Star>
        </InputText>
        <InputBox
          onChange={(e) => handleInputChange(e, 8)}
          placeholder="회원님 명의로 된 계좌를 입력해주세요"
        />
      </SubContainer>
      <Announcement size="xs">
        가입완료를 누르면 <UnderLine>이용약관</UnderLine> 동의로 간주됩니다.
      </Announcement>
      <Button content="다음" type={buttonType} onClick={joinButtonClicked} />
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
  padding-bottom: 10.3rem;
`;
const TitleContainer = styled.div`
  margin-bottom: 5.8rem;
`;

const SubContainer = styled.div`
  padding-bottom: 2.6rem;
`;
const SubTitle = styled(Title)`
  margin-bottom: 1.8rem;
`;
const InputText = styled(Title)`
  margin-bottom: 0.8rem;
`;
const Star = styled.span`
  color: #ed6565;
`;
const InputBox = styled(Input)`
  margin-bottom: 1.4rem;
`;
const Announcement = styled(Paragraph)`
  text-align: center;
  margin-bottom: 1.8rem;
`;
const UnderLine = styled.span`
  text-decoration: underline;
`;
