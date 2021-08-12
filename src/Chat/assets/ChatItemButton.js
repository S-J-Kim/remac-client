import React, { useState, useEffect } from 'react';
import Button from '../../components/Buttons';
import styled from 'styled-components';
import Input from '../../components/Inputs';

const ChatItemButton = styled(Button)`
  height: 3.6rem;
  font-size: 1.4rem;
  color: ${(props) => (props.type === 'deactivate' ? '#94999E' : 'white')};
`;

const ChatItemInput = styled(Input)`
  height: 3.6rem;
  font-size: 1.4rem;

  &::placeholder {
    font-size: 1.4rem;
    line-height: 1.7rem;
    text-align: center;
    padding: 0;
  }
`;

const ChatItemButtons = (props) => {
  const { type } = props;
  const [videoURL, setVideoURL] = useState('');
  const [inputStatus, setInputStatus] = useState('deactivate');

  const handURLInputChange = (e) => {
    setVideoURL(e.target.value);
  };

  useEffect(() => {
    setInputStatus(videoURL ? 'activate' : 'deactivate');
  }, [videoURL]);

  return type === 'check' ? (
    <>
      <ChatItemButton type="deactivate" content="아니오" mt={1.2} />
      <ChatItemButton type="activate" content="네" mt={0.8} />
    </>
  ) : (
    <>
      <ChatItemInput
        placeholder="URL을 입력해주세요"
        mt={1.2}
        value={videoURL}
        onChange={handURLInputChange}
        type="url"
      />
      <ChatItemButton type={inputStatus} content="확인" mt={0.8} />
    </>
  );
};

export default ChatItemButtons;
