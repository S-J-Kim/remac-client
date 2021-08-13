import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import ChatItem from './assets/ChatItem';
import { Container } from '../components/Container';
import { DateTime } from 'luxon';
import { useAuth } from '../contexts/AuthContextProvider';
import axios from 'axios';

const InputHandlerContext = createContext();

const Chattings = ({ data }) => {
  const [productURL, setProductURL] = useState();
  const handleConfirmButtonClick = () => {
    const config = {
      method: 'patch',
      url: `https://remac.co.kr/dialog/${id}`,
      headers: {
        Authorization: `Bearer ${authToken.access}`,
        'Content-Type': 'application/json',
      },
      data: {
        request_status: 'proceed',
      },
    };
    axios(config)
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
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleURLSubmit = () => {
    const config = {
      method: 'post',
      url: 'https://remac.co.kr/product/',
      headers: {
        Authorization: `Bearer ${authToken.access}`,
        'Content-Type': 'application/json',
      },
      data: {
        request_id: id,
        product_url: productURL,
      },
    };

    axios(config)
      .then((res) => {
        setChatList([
          ...chatList,
          <ChatItem
            type="done-creator"
            data={{ ...chatData, sendTime: DateTime.fromISO(res.data.created) }}
          />,
        ]);
      })
      .catch((err) => console.log(err.response.data));
  };

  const handleURLInput = (e) => {
    setProductURL(e.target.value);
  };

  const { id, users, created, updated, request_status, product, proceed_time } =
    data;
  const { isCreator, userId, authToken } = useAuth();
  const user = users.filter((item) => {
    return item.id !== userId;
  });
  const [chatData, setChatData] = useState({
    profileImage: user[0].profile_image,
    username: user[0].nickname,
    link: product?.product_url,
  });
  const handlers = {
    url: productURL,
    onClick: handleConfirmButtonClick,
    onSubmit: handleURLSubmit,
    onChange: handleURLInput,
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
                sendTime: DateTime.fromISO(proceed_time),
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
              onChange={handleURLInput}
              onClick={handleURLSubmit}
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
              {...handlers}
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

  return (
    <InputHandlerContext.Provider value={handlers}>
      <ChatItemListContainer key={id}>{chatList}</ChatItemListContainer>;
    </InputHandlerContext.Provider>
  );
};

const ChatItemListContainer = styled(Container)`
  background-color: #f6f6f6;
  height: 100vh;
`;

export default Chattings;
export { InputHandlerContext };
