import { useState } from 'react';
import styled from 'styled-components';

const StateAlert = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  margin-bottom: 1.3rem;
  background-color: white;
`;

const StateAlertBox = (props) => {
  const { type } = props;
  const [stateMessage, setStateMessage] = useState(() => {
    switch (type) {
      case 'confirm-requester':
        return '유튜버가 요청을 수락했습니다';
      case 'done-requester':
        return (
          <>
            요청이 완료되었습니다.
            <br />
            유튜버에게 리워드가 지급됩니다.
          </>
        );
      case 'confirm-creator':
        return '요청을 수락했습니다.';
      case 'done-creator':
        return (
          <>
            영상 제작이 완료되었습니다.
            <br />
            수수료를 제외한 리워드가 회원가입 시 입력한 계좌로
            <br />
            3일 이내에 지급됩니다.
          </>
        );
    }
  });

  return <StateAlert>{stateMessage}</StateAlert>;
};

export default StateAlertBox;
