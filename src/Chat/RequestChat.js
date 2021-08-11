import React, { useState } from 'react';
import styled from 'styled-components';
import ChatItem from './assets/ChatItem';

const RequestChat = (props) => {
  const [type, setType] = useState('check');
  const [chatData, setChatData] = useState({
    profileImage: '',
    videoURL: '',
    sendTime: '오후 8:30',
  });

  return <ChatItem type="urlInput" data={chatData} />;
};

export default RequestChat;
