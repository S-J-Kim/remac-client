import React, { useState } from 'react';
import styled from 'styled-components';
import { Paragraph, Title } from './Text';
import { ProductionStatusIndicator } from '../components/Buttons';
import { useAuth } from '../contexts/AuthContextProvider';
export default function ChattingHeader({ chatData }) {
  const [isOpened, setIsOpened] = useState(false);
  const { userId } = useAuth();

  const otherUser = chatData.users.filter((user) => user.id !== userId)[0];
  const [requestStatus] = useState(() => {
    switch (chatData.request_status) {
      case 'request':
        return '요청중';
      case 'proceed':
        return '진행중';
      case 'done':
        return '완료';
      case 'quit':
        return '취소';
      case 'refuse':
        return '반려';
    }
  });
  return (
    <>
      <UserHeader>
        <img src={process.env.PUBLIC_URL + '/backIcon.svg'} />
        <UserInfoWrapper>
          <UserNickName size="md">{otherUser.nickname}</UserNickName>
          <ProductionStatusIndicator>{requestStatus}</ProductionStatusIndicator>
        </UserInfoWrapper>
      </UserHeader>
      <RequestWrapper onClick={() => setIsOpened(!isOpened)}>
        <RequestOpenCloseWrapper>
          <RequestTitle size="lg">{chatData.request_title}</RequestTitle>
          <OpenCloseIcon
            isOpened={isOpened}
            src={process.env.PUBLIC_URL + '/content_open_close_icon.svg'}
          />
        </RequestOpenCloseWrapper>
        {isOpened ? <RequestAdditionalInformation chatData={chatData} /> : null}
      </RequestWrapper>
    </>
  );
}

const UserHeader = styled.div`
  width: 100%;
  height: 6.5rem;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: row;
  border-bottom: 0.1rem solid;
  border-color: ${(props) => props.theme.colors.lightgray};
  align-items: center;
  justify-content: center;
`;
const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const UserNickName = styled(Title)`
  margin-right: 1.5rem;
`;

const RequestWrapper = styled.div`
  padding: 1.8rem 1.6rem 1.7rem 1.6rem;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.lightgray};
  border-radius: 3px;
`;
const RequestOpenCloseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const RequestTitle = styled(Paragraph)`
  line-height: 1.9rem;
`;
const OpenCloseIcon = styled.img`
  transition: transform 0.3s;
  transform: ${(props) => (props.isOpened ? 'rotate(180deg)' : '')};
`;
const RequestAdditionalInformation = ({ chatData }) => {
  const dueDate = chatData.request_duedate.replace(/-/g, '.');
  return (
    <RequestSubWrapper>
      <RequestSubInfoWrapper>
        <RequsetDueDate size="sm">{dueDate}까지</RequsetDueDate>
        <img src={process.env.PUBLIC_URL + '/divider_column.svg'} />
        <RequestPrice size="sm">
          {new Intl.NumberFormat().format(chatData.request_reward)}원
        </RequestPrice>
      </RequestSubInfoWrapper>
      <RequestContent size="xs">{chatData.request_content}</RequestContent>
    </RequestSubWrapper>
  );
};
const RequestSubWrapper = styled.div`
  padding: 1.3rem 0rem 1rem;
  display: flex;
  flex-direction: column;
`;
const RequestSubInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  align-items: center;
`;

const RequsetDueDate = styled(Paragraph)`
  color: ${(props) => props.theme.colors.black};
  margin-right: 0.8rem;
`;
const RequestPrice = styled(Paragraph)`
  margin-left: 0.9rem;
  color: ${(props) => props.theme.colors.pink};
`;
const RequestContent = styled(Paragraph)`
  line-height: 1.6rem;
`;
