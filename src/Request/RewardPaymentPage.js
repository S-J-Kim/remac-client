import { request } from 'http';
import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { Paragraph, Title } from '../components/Text';
import Receipt from '../components/Receipt';
import Button from '../components/Buttons';
import { useAuth } from '../contexts/AuthContextProvider';

export default function RewardPaymentPage() {
  const { history } = useAuth();

  return (
    <Container>
      <Title size="lg" mt={2.8} mb={2.3}>
        리워드 결제
      </Title>
      <FixedAnnouncement size="lg" mb={1}>
        보고싶었던 영상, <br />
        이제 곧 리마크에서 볼 수 있어요!
      </FixedAnnouncement>
      <UserAnnouncement size="sm" mb={5.5}>
        리워드 결제가 확인되면 {request.creator}님에게 <br />
        {request.title} 요청이 전달됩니다.
      </UserAnnouncement>
      <Receipt
        date={request.date}
        bank="리마크 은행"
        account={request.account}
        price={request.price}
      />
      <PaymentAnnouncementContainer>
        <PaymentAnnouncement size="sm" mt={0.5} mb={0.5}>
          입금하실 때 입금자명을 “닉네임{request.nickname}”로 해주세요
        </PaymentAnnouncement>
      </PaymentAnnouncementContainer>
      <Button
        content="확인"
        type="activate"
        mt={5.3}
        mb={3.7}
        onClick={history.push('/')}
      />
    </Container>
  );
}
const FixedAnnouncement = styled(Paragraph)`
  line-height: 2.2rem;
  color: #000000;
`;
const UserAnnouncement = styled(Paragraph)`
  line-height: 2.2rem;
  font-weight: 500;
`;
const PaymentAnnouncementContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-top: 1.5rem;
`;
const PaymentAnnouncement = styled(Paragraph)`
  line-height: 2.8rem;
  text-align: center;
  font-weight: 500;
  color: ${(props) => props.theme.colors.pink};
`;
