import React from 'react';
import { Title } from '../../components/Text';
import styled from 'styled-components';
import { colors } from '../../styles/theme';

const RequestInfo = ({ request }) => {
  const {
    creatorName,
    category,
    requestTitle,
    requestDeadline,
    reward,
    requestContent,
  } = request;

  return (
    <Container>
      <ReceiptTitle size="sm">요청 정보</ReceiptTitle>
      <RequestInfoContainer>
        <RequestInfoLabel size="sm-medium">채널명</RequestInfoLabel>
        <RequestInfoLabel size="sm-medium">카테고리</RequestInfoLabel>
        <RequestInfoLabel size="sm-medium">제목</RequestInfoLabel>
        <RequestInfoLabel size="sm-medium">제작 마감일</RequestInfoLabel>
        <RequestInfoLabel size="sm-medium">리워드</RequestInfoLabel>
        <RequestInfoData size="sm">{creatorName}</RequestInfoData>
        <RequestInfoData size="sm">{category}</RequestInfoData>
        <RequestInfoData size="sm">{requestTitle}</RequestInfoData>
        <RequestInfoData size="sm">{requestDeadline}</RequestInfoData>
        <RequestInfoReward size="sm">{reward}원</RequestInfoReward>
      </RequestInfoContainer>
      <ReceiptTitle size="sm">요청 내용</ReceiptTitle>
      <RequestInfoContent>{requestContent}</RequestInfoContent>
    </Container>
  );
};

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 100%;
  padding: 1.8rem;
  margin: 5.3rem auto;
`;

const ReceiptTitle = styled(Title)`
  font-size: 18px;
  line-height: 22px;
  border-bottom: 1px solid #dedede;
  padding-bottom: 1.6rem;
`;

const RequestInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 7.5rem auto;
  justify-content: space-between;
  width: 100%;
  row-gap: 1.8rem;
  grid-auto-flow: dense;
  margin-top: 1.8rem;
  margin-bottom: 8rem;
`;

const RequestInfoLabel = styled(Title)`
  font-weight: 400;
  color: black;
  grid-column: 1;
`;

const RequestInfoData = styled(Title)`
  color: black;
  grid-column: 2;
  justify-self: end;
`;

const RequestInfoReward = styled(RequestInfoData)`
  color: ${({ theme }) => theme.colors.pink};
`;

const RequestInfoContent = styled(Title)`
  color: black;
  word-break: break-all;
  line-height: 2.2rem;
  margin-top: 2rem;
`;

export default RequestInfo;
