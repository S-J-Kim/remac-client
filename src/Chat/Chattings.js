import React, { useState } from 'react';
import styled from 'styled-components';
import ChatItem from './assets/ChatItem';
import { Container } from '../components/Container';
import { DateTime } from 'luxon';
import { useAuth } from '../contexts/AuthContextProvider';
import { request } from 'http';
import axios from 'axios';

const Chattings = ({ data }) => {
  const handleConfirmButtonClick = () => {
    axios
      .patch('https://remac.co.kr', {
        headers: {
          Authorization: `Bearer ${authToken.access}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setChatList([
          ...chatList,
          <ChatItem
            type="confirm-creator"
            data={{
              ...chatData,
              sendTime: DateTime.fromISO(res.data.proceed_time),
            }}
          />,
        ]);
      });
  };

  const handleURLSubmit = () => {};

  const { users, created, updated, request_status, product, proceed_time } =
    data;
  const { isCreator, userId, authToken } = useAuth();
  const user = users.filter((item) => {
    return item.id !== userId;
  });
  const chatData = {
    profileImage: user[0].profile_image,
    username: user[0].nickname,
    link: product,
  };

  const [chatList, setChatList] = useState(() => {
    let res = [];
    if (isCreator) {
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
    } else {
      switch (request_status) {
        case 'done':
          res = [
            <ChatItem
              type="done-requester"
              data={{
                ...chatData,
                sendTime: DateTime.fromISO(updated),
              }}
            />,
          ];
        case 'proceed':
          res = [
            <ChatItem
              type="confirm-requester"
              data={{
                ...chatData,
                sendTime: DateTime.fromISO(proceed_time),
              }}
            />,
            ...res,
          ];
        case 'request':
      }
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
