import React, { useState } from 'react';
import styled from 'styled-components';

import { Title } from '../../components/Text';
import { useAuth } from '../../contexts/AuthContextProvider';
import ChatItemButtons from './ChatItemButton';
import UrlLink from './UrlLink';

const ChatTextContainer = styled.div`
  width: 24.5rem;
  padding: 1.2rem 1.5rem;
  border: 0.5px solid rgba(210, 214, 218, 0.5);
  background-color: white;
  border-radius: 3px;
`;

const ChatItemText = styled(Title)`
  line-height: 2.4rem;
`;

const ChatBox = (props) => {
  const { type, data } = props;
  const { nickname } = useAuth();
  const [requestAction, setRequestAction] = useState(() => {
    switch (type) {
      case 'check-creator':
        return <ChatItemButtons type="check" />;
      case 'confirm-creator':
        return <ChatItemButtons type="urlInput" />;
      case 'done-requester':
        return <UrlLink>{data.link}</UrlLink>;
    }
  });
  const [messageText, setMessageText] = useState(() => {
    switch (type) {
      case 'confirm-requester':
        return (
          <>
            요청해주셔서 감사합니다.
            <br />
            기한까지 만들어드릴게요!
          </>
        );
      case 'check-creator':
        return (
          <>
            {nickname}님, 요청이 도착했습니다!
            <br />
            지금 시청자가 원하는 영상도
            <br />
            알아가고 리워드도 챙겨갈 타이밍!
            <br />
            상단에서 요청을 확인해보세요.
          </>
        );
      case 'confirm-creator':
        return (
          <>
            창작이 완료되면
            <br />
            URL을 전송해주세요
          </>
        );
      case 'done-requester':
        return (
          <>
            {nickname}님,
            <br />
            요청하신 영상 제작이 완료되었어요!
            <br />
            아래 URL에서 다른 시청자들보다
            <br />
            빠르게 시청해보세요!
          </>
        );
    }
  });

  return (
    <ChatTextContainer>
      <ChatItemText size="xs">{messageText}</ChatItemText>
      {requestAction}
    </ChatTextContainer>
  );
};

export default ChatBox;
