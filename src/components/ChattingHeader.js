import React, { useState } from 'react';
import styled from 'styled-components';
import { Paragraph, Title } from './Text';
import { ProductionStatusIndicator } from '../components/Buttons';
export default function ChattingHeader() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <UserHeader>
        <img src={process.env.PUBLIC_URL + '/backIcon.svg'} />
        <UserInfoWrapper>
          <UserNickName size="md">쥬쥬공쥬쨩</UserNickName>
          <ProductionStatusIndicator>요청중</ProductionStatusIndicator>
        </UserInfoWrapper>
      </UserHeader>
      <RequestWrapper onClick={() => setIsOpened(!isOpened)}>
        <RequestOpenCloseWrapper>
          <RequestTitle size="lg">title</RequestTitle>
          <OpenCloseIcon
            isOpened={isOpened}
            src={process.env.PUBLIC_URL + '/content_open_close_icon.svg'}
          />
        </RequestOpenCloseWrapper>
        {isOpened ? <RequestAdditionalInformation /> : null}
      </RequestWrapper>
    </>
  );
}

const UserHeader = styled.div`
  width: 100%;
  height: 6.5rem;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: row;
  border-bottom: 0.1rem solid;
  border-color: ${(props) => props.theme.colors.lightgray};
  align-items: center;
  justify-content: center;
`;
const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const UserNickName = styled(Title)`
  margin-right: 1.5rem;
`;

const RequestWrapper = styled.div`
  padding: 1.8rem 1.6rem 1.7rem 1.6rem;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.lightgray};
  border-radius: 3px;
`;
const RequestOpenCloseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const RequestTitle = styled(Paragraph)`
  line-height: 1.9rem;
`;
const OpenCloseIcon = styled.img`
  transition: transform 0.3s;
  transform: ${(props) => (props.isOpened ? 'rotate(180deg)' : '')};
`;
const RequestAdditionalInformation = () => {
  return (
    <RequestSubWrapper>
      <RequestSubInfoWrapper>
        <RequsetDueDate size="sm">2021.08.16까지</RequsetDueDate>
        <img src={process.env.PUBLIC_URL + '/divider_column.svg'} />
        <RequestPrice size="sm">7,000원</RequestPrice>
      </RequestSubInfoWrapper>
      <RequestContent size="xs">
        비즈먹방 투명 비즈 색깔 별로 먹방 보여주세요! 비즈 꽃 반지도 같이
        먹어주셨으면 좋겠어요. 비즈 반지 매듭짓는 법도 추가로 알려주세요! 비즈
        반지 초보자고요 영상 길이는 한 10분 내외로 부탁드려요. 제가 초보라서
        매듭 짓는 부분은 확대해서 영상 촬영해주세요. 성민 오빠 화이팅 백엔드
        화이팅 잘 할 수 있다 효진언니 고마워여 사랑해 세오스 부쨩 최고다 최고
        배고픈데 곱창 시킨 거 얼른 왔으면 좋겠다 나는 면목이 없다 규주님
        너무너무 감사합니다!
      </RequestContent>
    </RequestSubWrapper>
  );
};
const RequestSubWrapper = styled.div`
  padding: 1.3rem 0rem 1rem;
  display: flex;
  flex-direction: column;
`;
const RequestSubInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  align-items: center;
`;

const RequsetDueDate = styled(Paragraph)`
  color: ${(props) => props.theme.colors.black};
  margin-right: 0.8rem;
`;
const RequestPrice = styled(Paragraph)`
  margin-left: 0.9rem;
  color: ${(props) => props.theme.colors.pink};
`;
const RequestContent = styled(Paragraph)`
  line-height: 1.6rem;
`;
