import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChattingHeader from '../components/ChattingHeader';
import ChatItem from './assets/ChatItem';
import { Container } from '../components/Container';
import { DateTime } from 'luxon';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContextProvider';
import Chattings from './Chattings';

const RequestChat = (props) => {
  // const { pk } = useParams();
  const { authToken } = useAuth();
  const location = useLocation();
  const [chatData, setChatData] = useState();

  useEffect(() => {
    axios
      .get(`https://remac.co.kr/dialog/20`, {
        // headers: { Authorization: `Bearer ${authToken.access}` },
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI4ODcwNzcwLCJqdGkiOiI5MWQ4ZmVjOTIxM2E0YzZkYThmYzQ3ZmU1NGEwNTIwOSIsInVzZXJfaWQiOjE5LCJ1c2VybmFtZSI6ImdyZWZlciJ9.z4DsodvCPPNM8ACBvT9Za1YOkawJBkvLI7sScJqK06c`,
        },
      })
      .then((res) => {
        console.log(res);
        setChatData(res.data);
      });
  }, []);

  return (
    <>
      <ChattingHeader />
      <Chattings data={chatData} isCreator={true} />
    </>
  );
};

export default RequestChat;
