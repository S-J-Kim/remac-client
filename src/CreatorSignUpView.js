import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './components/Buttons';
import Input from './components/Inputs';
import SectionHeader from './components/SectionHeader';
import { Title, Paragraph } from './components/Text';
import { Container } from './components/Container';
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
      setJoinData((prevData) => ({
        ...prevData,
        category: e.target.value,
      }));
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
    <MainContainer>
      <SubContainer>
        <TitleContainer>
          <SectionHeader title="크리에이터 회원가입" />
        </TitleContainer>
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
        <Div>
          <Img src={process.env.PUBLIC_URL + '/Vector.svg'} />
          <Select
            name="category"
            onChange={(e) => handleInputChange(e, 3)}
            placeholder="카테고리를 선택해주세요"
            val={joinData['category']}
          >
            <option value="">카테고리를 선택해주세요</option>
            <option value="animal">동물</option>
          </Select>
        </Div>

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
      <LastContainer>
        <SubTitle size="md">계좌정보</SubTitle>
        <InputText size="sm">
          은행<Star>*</Star>
        </InputText>
        <Div>
          <Img src={process.env.PUBLIC_URL + '/Vector.svg'} />
          <Select
            name="category"
            onChange={(e) => handleInputChange(e, 3)}
            placeholder="카테고리를 선택해주세요"
            val={joinData['category']}
          >
            <option value="">카테고리를 선택해주세요</option>
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </Select>
        </Div>
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
      </LastContainer>
      <Container>
        <Announcement size="xs">
          가입완료를 누르면 <UnderLine>이용약관</UnderLine> 동의로 간주됩니다.
        </Announcement>
        <Button content="다음" type={buttonType} onClick={joinButtonClicked} />
      </Container>
    </MainContainer>
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
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10.3rem;
`;
const TitleContainer = styled.div`
  margin-bottom: 5.8rem;
`;

const SubContainer = styled(Container)`
  padding-bottom: 2.6rem;
  border-bottom: 0.5rem solid #f2f2f2;
  margin-bottom: 3rem;
`;
const LastContainer = styled(Container)`
  margin-bottom: 3.4rem;
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
const Select = styled.select`
  width: 100%;
  height: 4.8rem;
  border-radius: 3px;
  border: 1px solid #d2d6da;
  padding: 1.5rem 0.9rem 1.5rem 0.9rem;
  font-weight: ${(props) => {
    switch (props.val) {
      case '':
        return 400;
      default:
        return 600;
    }
  }};
  background: none;
  color: ${(props) => {
    switch (props.val) {
      case '':
        return '#94999E';
      default:
        return '#292929';
    }
  }};
  font-family: Pretendard;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  z-index: 4;
  &:focus {
    outline: none;
    border: 1px solid #ed6565;
  }
  ::-ms-expand {
    display: none; /*for IE10,11*/
  }
`;
const Div = styled.div`
  margin-bottom: 1.4rem;
  position: relative;
`;
const Img = styled.img`
  z-index: 1;
  position: absolute;
  right: 1.2rem;
  top: 2rem;
`;
const options = [
  '신한은행',
  '카카오뱅크',
  '농협',
  '국민은행',
  '우리은행',
  '기업은행',
  '하나은행',
  '케이뱅크',
  '우체국',
];
