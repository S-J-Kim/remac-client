import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './components/Buttons';
import Input from './components/Inputs';
import SectionHeader from './components/SectionHeader';
import { Title, Paragraph } from './components/Text';
import { Container } from './components/Container';
import { useHistory } from 'react-router';
import { Select } from './components/Select';

export default function CreatorSignUpPage() {
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
  const history = useHistory();
  function joinButtonClicked(e) {
    if (!passwordCheck) alert('비밀번호를 확인해주세요');
    else
      history.push({
        pathname: '/signup/profile',
        state: { type: 'creator' },
      });
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
  console.log(joinData);
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
        <SectionHeader title="크리에이터 회원가입" mt={2.8} mb={5.8} />
        <Title mb={1.8} size="md">
          회원정보
        </Title>
        <Title mb={0.8} size="sm">
          아이디<Star>*</Star>
        </Title>
        <Input
          mb={1.4}
          onChange={(e) => handleInputChange(e, 0)}
          placeholder="6자 이상 12자 이하"
        />
        <Title mb={0.8} size="sm">
          비밀번호<Star>*</Star>
        </Title>
        <Input
          mb={1.4}
          onChange={(e) => handleInputChange(e, 1)}
          placeholder="6자 이상 12자 이하"
          type="password"
        />
        <Title mb={0.8} size="sm">
          비밀번호 확인<Star>*</Star>
        </Title>
        <Input
          mb={1.4}
          onChange={handlePasswordCheck}
          placeholder="비밀번호를 확인해주세요."
          type="password"
        />
      </SubContainer>
      <SubContainer>
        <Title mb={1.8} size="md">
          채널정보
        </Title>
        <Title mb={0.8} size="sm">
          채널명<Star>*</Star>
        </Title>
        <Input
          mb={1.4}
          onChange={(e) => handleInputChange(e, 2)}
          placeholder="운영하는 유투브 채널명을 입력해주세요"
        />
        <Title mb={0.8} size="sm">
          카테고리<Star>*</Star>
        </Title>
        <Select
          handleSelectChange={(e) => handleInputChange(e, 3)}
          currentValue={joinData.category}
          selectOptions={categories}
        />
        <Title mb={0.8} size="sm">
          채널 URL<Star>*</Star>
        </Title>
        <Input
          mb={1.4}
          onChange={(e) => handleInputChange(e, 5)}
          placeholder="채널 URL을 입력해주세요"
        />
        <Title mb={0.8} size="sm">
          한줄소개<Star>*</Star>
        </Title>
        <Input
          mb={1.4}
          onChange={(e) => handleInputChange(e, 4)}
          placeholder="4자 이상 20자 이하 작성"
        />
      </SubContainer>
      <LastContainer>
        <Title mb={1.8} size="md">
          계좌정보
        </Title>
        <Title mb={0.8} size="sm">
          은행<Star>*</Star>
        </Title>
        <Select
          handleSelectChange={(e) => handleInputChange(e, 6)}
          currentValue={joinData.bank}
          selectOptions={banks}
        />
        <Title mb={0.8} size="sm">
          계좌번호<Star>*</Star>
        </Title>
        <Input
          mb={1.4}
          onChange={(e) => handleInputChange(e, 7)}
          placeholder="-를 포함하지 않고 작성해주세요"
        />
        <Title mb={0.8} size="sm">
          입금자명<Star>*</Star>
        </Title>
        <Input
          mb={1.4}
          onChange={(e) => handleInputChange(e, 8)}
          placeholder="회원님 명의로 된 계좌를 입력해주세요"
        />
      </LastContainer>
      <Container>
        <Announcement size="xs" mb={1.8}>
          가입완료를 누르면 <UnderLine>이용약관</UnderLine> 동의로 간주됩니다.
        </Announcement>
        <Button content="다음" type={buttonType} onClick={joinButtonClicked} />
      </Container>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10.3rem;
`;

const SubContainer = styled(Container)`
  padding-bottom: 2.6rem;
  border-bottom: 0.5rem solid #f2f2f2;
  margin-bottom: 3.1rem;
`;
const LastContainer = styled(Container)`
  margin-bottom: 3.4rem;
`;
const Star = styled.span`
  color: #ed6565;
`;
const Announcement = styled(Paragraph)`
  text-align: center;
`;
const UnderLine = styled.span`
  text-decoration: underline;
`;

const banks = [
  '신한은행',
  '카카오뱅크',
  '농협',
  '국민은행',
  '우리은행',
  '기업은행',
  '하나은행',
];
const categories = [
  '패션/뷰티',
  '푸드',
  '일상',
  'asmr',
  '게임',
  '동물',
  '영화',
  '음악/춤',
  '스포츠',
  '테크',
  '지식정보',
  '뉴스',
  'FUN',
  '기타',
];
