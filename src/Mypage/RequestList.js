import React, { useState } from 'react';
import styled from 'styled-components';
import RequestItem from './RequestItem';

const RequestList = (props) => {
  const { requests, username } = props;
  // const [requests, setRequests] = useState([
  //   {
  //     profileImage: '',
  //     title: '이시국에 강릉 여행 브이로그',
  //     username: '민지킴이',
  //     reward: 5000,
  //     status: '진행중',
  //     requestedAt: '어제 14:35',
  //   },
  // ]);
  return (
    <RequestListSection>
      <SectionTitle>
        요청 목록 <RequestCounter>{requests.length}</RequestCounter>
      </SectionTitle>
      {requests.map((item) => {
        return <RequestItem request={item} username={username} />;
      })}
    </RequestListSection>
  );
};

const RequestListSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

const SectionTitle = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 3rem;
`;

const RequestCounter = styled.span`
  color: ${({ theme }) => theme.colors.pink};
  margin-left: 0.8rem;
`;

export default RequestList;
