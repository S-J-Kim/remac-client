import React from 'react';
import styled from 'styled-components';
import ChatBox from './ChatBox';
import ProfileImage from './ChatProfileImage';
import { Paragraph } from '../../components/Text';
import DateDivider from './DateDivider';
import StateAlertBox from './StateAlertBox';

/*
  ChatItem이 가질 수 있는 상태 5가지
  - confirm-requester: 크리에이터가 요청 수락한 경우 리퀘스터에게 보여주는 메세지
  - done-requester: 크리에이터가 영상 제작 완료한 경우 리퀘스터에게 보여주는 메세지
  - check-creator: 리퀘스트가 막 도착한 경우 크리에이터에게 보여주는 메세지
  - confirm-creator: 리퀘스트를 수락한 경우 크리에이터에게 보여주는 메세지
  - done-creator: 크리에이터가 URL을 입력한 경우 보여주는 메세지
*/

const ChatItem = (props) => {
  const { type, data, onClick, onChange } = props;
  return (
    <>
      <DateDivider messageSendAt={data?.sendTime.toISO()} />
      {type !== 'check-creator' && <StateAlertBox type={type} />}
      {type !== 'done-creator' && (
        <ChatItemContainer>
          <ProfileImage src={data?.profileImage} />
          <ChatBoxContainer>
            <ChatBox
              type={type}
              data={data}
              onClick={onClick}
              onChange={onChange}
            />
            <MessageSendAt size="xs">
              {data?.sendTime.toFormat('t')}
            </MessageSendAt>
          </ChatBoxContainer>
        </ChatItemContainer>
      )}
    </>
  );
};

const ChatItemContainer = styled.div`
  display: flex;
  gap: 0.7rem;
`;

const ChatBoxContainer = styled(ChatItemContainer)`
  flex-direction: column;
`;

const MessageSendAt = styled(Paragraph)``;

export default ChatItem;
