import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Buttons';
import Input from '../components/Inputs';
import SectionHeader from '../components/SectionHeader';
import { Paragraph, Title } from '../components/Text';
import { Container } from '../components/Container';
import { Select } from '../components/Select';
import { useAuth } from '../contexts/AuthContextProvider';
import { useLocation } from 'react-router';

export default function RequestFormPage() {
  const location = useLocation();
  const { creatorId, creatorName, category } = location.state;
  const [request, setRequest] = useState({
    users: [creatorId],
    request_title: '',
    request_content: '',
    request_duedate: '',
    request_reward: '',
    refund_bank: '',
    refund_account: '',
    refund_depositor: '',
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const { history } = useAuth();
  function findSelectId(value, options) {
    const key = options.filter((option) => option[1] === value);
    return key[0][0];
  }
  function handleInputChange(e) {
    const { id, value } = e.target;
    if (id === 'refund_bank')
      setRequest((prev) => ({
        ...prev,
        refund_bank: findSelectId(value, banks),
      }));
    else setRequest((prev) => ({ ...prev, [id]: value }));
  }
  function handleRequestButtonClick() {
    history.push('/request/check', {
      request: request,
      creatorName: creatorName,
      category: category,
    });
  }
  useEffect(() => {
    setIsCompleted(true);
    for (var key in request) {
      if (request[key] === '') setIsCompleted(false);
    }
  }, [request]);
  return (
    <div>
      <Container>
        <SectionHeader
          title="0000에 요청하기"
          mt={2.8}
          mb={3.6}
          handleGoBack={() => history.goBack()}
        />
        <Image></Image>
        <NickName size="md" mt={0.4} mb={0.5}>
          민지킴이
        </NickName>
        <Category size="xs" mb={2.2}>
          헬스
        </Category>
        <Title size="sm" mb={0.8}>
          제목
        </Title>
        <Input
          mb={1.4}
          placeholder="제목을 입력해주세요"
          id="request_title"
          onChange={handleInputChange}
          value={request.request_title}
        />
        <Title size="sm" mb={0.8}>
          내용
        </Title>
        <RequestContent
          placeholder="20자 이상 255자 이하
상세하게 작성할 수록 유투버가 내가 원하는 영상을 
제작할 수 있어요!"
          id="request_content"
          onChange={handleInputChange}
          value={request.request_content}
        />
        <Title size="sm" mb={0.8}>
          제작 마감일
        </Title>
        <Input
          mb={1.4}
          type="date"
          id="request_duedate"
          onChange={handleInputChange}
          value={request.request_duedate}
        />
        <Title size="sm" mb={0.8}>
          리워드
        </Title>
        <Input
          mb={2.9}
          placeholder="최소금액 100원"
          id="request_reward"
          onChange={handleInputChange}
          value={request.request_reward}
        />
      </Container>
      <Divider />
      <Container>
        <Title size="md" mt={3.1} mb={1.8}>
          환불 계좌정보
        </Title>
        <Title size="sm" mb={0.8}>
          은행
        </Title>
        <Select
          id="refund_bank"
          handleSelectChange={handleInputChange}
          currentValue={request.refund_bank}
          selectOptions={banks}
        />
        <Title size="sm" mb={0.8}>
          계좌번호
        </Title>
        <Input
          mb={1.4}
          placeholder="-를 포함하지 않고 작성해주세요"
          id="refund_account"
          onChange={handleInputChange}
          value={request.refund_account}
        />
        <Title size="sm" mb={0.8}>
          입금자명
        </Title>
        <Input
          mb={2.9}
          placeholder="회원님 명의로 된 계좌를 입력해주세요"
          id="refund_depositor"
          onChange={handleInputChange}
          value={request.refund_depositor}
        />
      </Container>
      <Divider />
      <Container>
        <Title size="md" mt={3.1} mb={1.8}>
          안내사항
        </Title>
        <Content>
          3일 이내로 유투버가 요청을 수락하지 않을 시 요청이 자동으로
          취소됩니다. <br />
          기간 내 미수락으로 요청이 취소되거나 유투버가 요청을 거절할 시 리워드
          전액이 요청폼에 등록한 계좌로 환불됩니다.
          <br />
          유투버가 요청을 수락한 후 제작 마감일 이내에 영상 URL을 대화창에
          전달하면 수수료를 제외한 리워드가 유투버에게 지급됩니다. <br />
          유투버가 요청 사항을 준수하지 않았거나, 시청에 불편함이 있는 경우
          리워드 지급을 거절할 수 있습니다. <br />
          REMAC의 카카오톡 채널로 요청 제목, 아이디, 리워드 거절 사유를
          전송해주시면 신속하게 답변드리겠습니다. <br />
          단, 거절 사유가 합당하지 않다고 판단될 시, 리워드는 환불되지 않습니다.
          <br />
          합당하다고 판단되는 거절 사유에 한해 리워드 금액의 70%가 등록한 계좌로
          환불됩니다. <br />
          유투버가 제작 마감일 이내에 영상 URL을 전달하지 않은 경우, 요청이
          취소되며 리워드 전액이 요청폼에 등록한 계좌로 환불됩니다. <br />내
          요청 목록은 마이페이지에서 확인할 수 있습니다.
        </Content>
        <Button
          content="다음"
          type={isCompleted ? 'activate' : 'deactivate'}
          mb={6.2}
          onClick={handleRequestButtonClick}
        />
      </Container>
    </div>
  );
}
const NickName = styled(Title)`
  text-align: center;
`;
const Image = styled.div`
  width: 86px;
  height: 86px;
  background: rgba(229, 229, 229, 0.29);
  border: 1px solid #d2d6da;
  border-radius: 50px;
  box-sizing: border-box;
  margin-left: 12.85rem;
`;
const Category = styled(Paragraph)`
  text-align: center;
`;
const Divider = styled.div`
  height: 0.5rem;
  width: 100%;
  background: #f2f2f2;
`;
const Content = styled.div`
  font-weight: 200;
  font-size: 12px;
  line-height: 17px;
  color: #000000;
  margin-bottom: 2.3rem;
`;
const RequestContent = styled.textarea`
  height: 10.8rem;
  margin-bottom: 1.4rem;
  border-radius: 3px;
  border: 1px solid #d2d6da;
  padding: 1.5rem 0.9rem;
  font-weight: 600;
  color: #292929;
  font-family: Pretendard;
  line-height: 21px;
  font-size: 1.5rem;
  &:focus {
    outline: none;
    border: 1px solid #ed6565;
  }
  ::placeholder {
    font-family: Pretendard;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 2.1rem;
    color: #94999e;
  }
`;
const banks = [
  ['SH', '신한은행'],
  ['KA', '카카오뱅크'],
  ['NH', '농협'],
  ['KB', '국민은행'],
  ['WR', '우리은행'],
  ['IBK', '기업은행'],
  ['HN', '하나은행'],
];
