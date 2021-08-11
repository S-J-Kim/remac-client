import React from 'react';
import styled from 'styled-components';
import ChatBox from './ChatBox';
import ProfileImage from './ChatProfileImage';
import { Paragraph } from '../../components/Text';

const ChatItem = (props) => {
  const { type, data } = props;
  return (
    <ChatItemContainer>
      <ProfileImage src={data?.profileImage} />
      <ChatBoxContainer>
        <ChatBox type={type} link={data?.videoURL} />
        <MessageSendAt size="xs">{data.sendTime}</MessageSendAt>
      </ChatBoxContainer>
    </ChatItemContainer>
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
