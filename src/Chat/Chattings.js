import React, { useState } from 'react';
import styled from 'styled-components';
import ChatItem from './assets/ChatItem';
import { Container } from '../components/Container';
import { DateTime } from 'luxon';

const Chattings = ({ data, isCreator }) => {
  const { users, created, updated, request_status, product, proceed_time } =
    data;
  const chatData = {
    profileImage: users[0].profile_image,
    username: users[0].nickname,
    link: product,
  };
  const [chatList, setChatList] = useState(() => {
    let res = [];
    switch (request_status) {
      case 'done':
        res = [
          <ChatItem
            type="done-creator"
            data={{
              ...chatData,
              sendTime: DateTime.fromISO(updated),
            }}
          />,
        ];
      case 'proceed':
        res = [
          <ChatItem
            type="confirm-creator"
            data={{
              ...chatData,
              sendTime: DateTime.fromISO(proceed_time),
            }}
          />,
          ...res,
        ];
      case 'request':
        res = [
          <ChatItem
            type="check-creator"
            data={{
              ...chatData,
              sendTime: DateTime.fromISO(created),
            }}
          />,
          ...res,
        ];
    }

    return res;
  });

  return <ChatItemListContainer>{chatList}</ChatItemListContainer>;
};

const ChatItemListContainer = styled(Container)`
  background-color: #f6f6f6;
  height: 100vh;
`;

export default Chattings;
