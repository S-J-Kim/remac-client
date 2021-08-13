import React, { useEffect, useState } from 'react';
import ChattingHeader from '../components/ChattingHeader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContextProvider';
import Chattings from './Chattings';

const RequestChat = (props) => {
  const { pk } = useParams();
  const { authToken } = useAuth();
  const [chatData, setChatData] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`https://remac.co.kr/dialog/${pk}/`, {
        headers: { Authorization: `Bearer ${authToken.access}` },
        // headers: {
        //   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI4ODcwNzcwLCJqdGkiOiI5MWQ4ZmVjOTIxM2E0YzZkYThmYzQ3ZmU1NGEwNTIwOSIsInVzZXJfaWQiOjE5LCJ1c2VybmFtZSI6ImdyZWZlciJ9.z4DsodvCPPNM8ACBvT9Za1YOkawJBkvLI7sScJqK06c`,
        // },
      })
      .then((res) => {
        console.log(res);
        setChatData(res.data);
      });
  }, []);

  return (
    <>
      {chatData && <ChattingHeader chatData={chatData} />}
      {chatData && <Chattings data={chatData} />}
    </>
  );
};

export default RequestChat;
