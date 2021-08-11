import React, { useState } from 'react';
import { Container } from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { Paragraph, Title } from '../components/Text';
import styled from 'styled-components';
import RequestInfo from './assets/RequestInfo';
import Button from '../components/Buttons';
import { Fetchers } from '../fetchers';
import { useAuth } from '../contexts/AuthContextProvider';

const RequestCheck = (props) => {
  const { history, authToken } = useAuth();
  const [requestInfo, setRequestInfo] = useState({
    creatorName: '보리의 하루',
    category: '동물',
    requestTitle: '비즈먹방해주세여ㅛ!',
    requestDeadline: '2021.08.21. 23:59',
    reward: 7000,
    requestContent:
      '비즈먹방 투명 비즈 색깔 별로 먹방 보여주세요! 비즈 꽃 반지도 같이 먹어주셨으면 좋겠어요. 비즈 반지 매듭짓는 법도 추가로 알려주세요! 비즈 반지 초보자고요 영상 길이는 한 10분 내외로 부탁드려요. 제가 초보라서 매듭 짓는 부분은 확대해서 영상 촬영해주세요. 성민 오빠 화이팅 백엔드 화이팅 잘 할 수 있다 효진언니 고마워여 사랑해 세오스 부쨩 최고다 최고 배고픈데 곱창 시킨 거 얼른 왔으면 좋겠다 나는 면목이 없다 규주님 너무너무 감사합니다!',
  });
  function handleChargeButtonClicked() {
    Fetchers.createRequest({ param: requestInfo, authToken: authToken }).then(
      (response) => {
        console.log(response);
      }
    );
  }

  return (
    <Container>
      <SectionHeader title="요청 확인" handleGoBack={() => history.goBack()} />
      <Paragraph size="lg" mt={2.3}>
        {requestInfo.creatorName}님에게 보내는 요청입니다.
      </Paragraph>
      <SubDescription size="sm" mt={1}>
        원하는 영상이 제작될 수 있도록
        <br />
        크리에이터에게 보내는 요청을 확인해주세요.
      </SubDescription>
      <RequestInfo request={requestInfo} />
      <PurchseButton
        type="activate"
        content="리워드 결제"
        onClick={handleChargeButtonClicked}
      />
    </Container>
  );
};

const SubDescription = styled(Paragraph)`
  line-height: 2.2rem;
`;

const PurchseButton = styled(Button)`
  position: fixed;
  width: calc(100vw - 32px);
  top: 60rem;
`;

export default RequestCheck;
