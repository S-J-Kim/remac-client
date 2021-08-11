import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductionStatusIndicator } from '../components/Buttons';
import { Title, Paragraph } from '../components/Text';
import { DateTime, Interval, TIME_24_SIMPLE } from 'luxon';

const RequestItem = ({ request }) => {
  const { request_title, request_status, created, users, request_reward } =
    request;

  const [requestStatus] = useState(() => {
    switch (request_status) {
      case 'request':
        return '요청중';
      case 'proceed':
        return '진행중';
      case 'complete':
        return '완료';
      case 'cancel':
        return '취소';
    }
  });

  const requestedAt = () => {
    const time = DateTime.fromISO(created);
    const now = DateTime.now();

    const day = () => {
      const days = Interval.fromDateTimes(time, now);
      console.log(days.length('days'));
      switch (days) {
        case 0:
          return '오늘';
        case 1:
          return '어제';
        default:
          return time.get('day');
      }
    };

    const month = day() > 2 ? time.get('month') : null;
    const hourMinutes = time.toLocaleString(DateTime.TIME_24_SIMPLE);
    console.log(hourMinutes);

    return `${month}월 ${day()}일 ${hourMinutes}`;
  };

  return (
    <ItemContainer>
      <ProfileImage src={users[0].profile_image} />
      <ItemInfoSection>
        <ItemInfoRow>
          <RequestTitle size="xs">{request_title}</RequestTitle>
          <ProductionStatusIndicator>{requestStatus}</ProductionStatusIndicator>
        </ItemInfoRow>
        <ItemInfoRow>
          <Username size="md">{users[0].nickname}</Username>
        </ItemInfoRow>
        <ItemInfoRow>
          <Reward size="sm">{request_reward.toLocaleString()}원</Reward>
          <Paragraph size="xs">{requestedAt()}</Paragraph>
        </ItemInfoRow>
      </ItemInfoSection>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  height: 6.6rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  //justify-content: space-between;
  gap: 1.1rem;
  margin-bottom: 4rem;
`;

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background: #dedede;
`;

const ItemInfoSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ItemInfoRow = styled.div`
  height: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RequestTitle = styled(Title)`
  font-weight: 400;
`;

const Username = styled(Paragraph)`
  font-size: 1.4rem;
`;

const Reward = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.black};
`;

export default RequestItem;
