import React, { useReducer, useState } from 'react';
import styled from 'styled-components';

import { Title } from '../../components/Text';
import ChatItemButtons from './ChatItemButton';
import UrlLink from './UrlLink';

const ChatTextContainer = styled.div`
  width: 24.5rem;
  padding: 1.2rem 1.5rem;
  border: 0.5px solid rgba(210, 214, 218, 0.5);
  background-color: white;
`;

const ChatItemText = styled(Title)`
  line-height: 2.4rem;
`;

const ChatBox = (props) => {
  const { type, link } = props;
  const [requestAction, setRequestAction] = useState(() => {
    switch (type) {
      case 'check':
        return <ChatItemButtons type="check" />;
      case 'urlInput':
        return <ChatItemButtons type="urlInput" />;
      case 'videoURL':
        return <UrlLink>{link}</UrlLink>;
    }
  });

  return (
    <ChatTextContainer>
      <ChatItemText size="xs">
        여기는 메세지가 들어가는 영역입니다. 알아서 잘 해보시던지~
      </ChatItemText>
      {requestAction}
    </ChatTextContainer>
  );
};

export default ChatBox;
