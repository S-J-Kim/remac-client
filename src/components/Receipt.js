import React from 'react';
import styled from 'styled-components';
import { Title } from './Text';

const Receipt = (props) => {
  const { date, bank, account, price } = props;
  return (
    <Container>
      <ReceiptTitle size="sm" mb={1.1}>
        결제 정보
      </ReceiptTitle>
      <ContentContainer>
        <Labels size="sm-medium">
          입금 기한 <br />
          입금 은행 <br />
          입금 계좌 <br />
          입금 금액
        </Labels>
        <Contents size="sm">
          2021.08.08 23:59{date}
          <br />
          리마크 은행{bank}
          <br />
          110-486-123456{account}
          <br />
          <Price>7,000원{price}</Price>
        </Contents>
      </ContentContainer>
    </Container>
  );
};
const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 100%;
  height: 30rem;
  padding: 1.8rem;
`;
const ReceiptTitle = styled(Title)`
  font-size: 18px;
  line-height: 22px;
  border-bottom: 1px solid #dedede;
  padding-bottom: 1.5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Labels = styled(Title)`
  font-weight: 400;
  line-height: 3.8rem;
  color: #000000;
`;
const Contents = styled(Title)`
  line-height: 3.8rem;
  color: #000000;
  text-align: end;
`;
const Price = styled.span`
  color: ${(props) => props.theme.colors.pink};
`;
export default Receipt;
