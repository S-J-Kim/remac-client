import React, { useEffect } from 'react';
import { Container } from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { Paragraph } from '../components/Text';
import styled from 'styled-components';
import RequestInfo from './assets/RequestInfo';
import Button from '../components/Buttons';
import { Fetchers } from '../fetchers';
import { useAuth } from '../contexts/AuthContextProvider';
import { useLocation } from 'react-router';

const RequestCheck = (props) => {
  const { history, authToken } = useAuth();
  const location = useLocation();
  const { request, creatorName, category } = location.state;
  function handleChargeButtonClicked() {
    Fetchers.createRequest({
      request: request,
      authToken: authToken.access,
    }).then((response) => {
      history.push('/request/reward', {
        request: request,
        creatorName: creatorName,
        category: category,
      });
    });
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <SectionHeader title="요청 확인" handleGoBack={() => history.goBack()} />
      <Paragraph size="lg" mt={2.3}>
        {creatorName}님에게 보내는 요청입니다.
      </Paragraph>
      <SubDescription size="sm" mt={1}>
        원하는 영상이 제작될 수 있도록
        <br />
        크리에이터에게 보내는 요청을 확인해주세요.
      </SubDescription>
      <RequestInfo
        request={request}
        creatorName={creatorName}
        category={category}
      />
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
  bottom: 6rem;
`;

export default RequestCheck;
