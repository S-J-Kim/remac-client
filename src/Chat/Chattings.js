import React from 'react';
import styled from 'styled-components';
import ChatItem from './assets/ChatItem';
import { Container } from '../components/Container';
import { DateTime } from 'luxon';

const Chattings = (props) => {
  return (
    <ChatItemListContainer>
      <ChatItem
        type="done-creator"
        data={{ sendTime: DateTime.now({ locale: 'kr' }).toFormat('t') }}
      />
    </ChatItemListContainer>
  );
};

const ChatItemListContainer = styled(Container)`
  background-color: #f6f6f6;
  height: 100vh;
`;

export default Chattings;
