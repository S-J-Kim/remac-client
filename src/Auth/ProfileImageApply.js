import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Buttons';
import { Title, Paragraph } from '../components/Text';
import { Container } from '../components/Container';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContextProvider';
import { Fetchers } from '../fetchers';

const ProfileImageApply = (props) => {
  const [profileImage, setProfileImage] = useState();
  const [profileImageURL, setProfileImageURL] = useState();
  const ref = useRef();
  const { authToken, history } = useAuth();
  const location = useLocation();
  let image;

  const uploadProfileImage = () => {
    // dataURL 값이 data:image/jpeg:base64,~~~~~~~ 이므로 ','를 기점으로 잘라서 ~~~~~인 부분만 다시 인코딩

    const byteString = atob(image.split(',')[1]);

    // // Blob를 구성하기 위한 준비, 이 내용은 저도 잘 이해가 안가서 기술하지 않았습니다.
    // const ab = new ArrayBuffer(byteString.length);
    // const ia = new Uint8Array(ab);
    // for (let i = 0; i < byteString.length; i++) {
    //   ia[i] = byteString.charCodeAt(i);
    // }
    // const blob = new Blob([ia], {
    //   type: 'image/jpeg',
    // });
    // const file = new File([blob], 'image.jpg');

    // // 위 과정을 통해 만든 image폼을 FormData에 넣어줍니다.
    // // 서버에서는 이미지를 받을 때, FormData가 아니면 받지 않도록 세팅해야합니다.
    const formData = new FormData();
    formData.append('profile_image', image);
    // const res = Fetchers.signupProfileImage(formData);
    // res.then((data) => console.log(data));

    const config = {
      method: 'patch',
      url: 'https://remac.co.kr/api/profileimage/',
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI4NzY5NDY1LCJqdGkiOiI1YjAxNjMzZWE1YTM0Y2Y3OTJmZmFkYWE0NDhhMmUxMiIsInVzZXJfaWQiOjEwLCJ1c2VybmFtZSI6InF3ZXJxd2VyIn0.foDHBa-IZIUN5vExdiVN6nkx8fJEDc_qOlL1Bvs7pFE`,
        'Content-Type': 'application/json',
      },
      data: {
        profile_image: image,
      },
    };
    axios(config).then((res) => console.log(res));
  };

  const handleUploadButtonClick = (e) => {
    ref.current.click();
  };

  const handleCompleteButtonClick = () => {
    uploadProfileImage(); // Post user's profile image to server
    history.push('/signup/complete');
  };

  const handleImageUpload = (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setProfileImage(event.target.result);
      setProfileImageURL(e.target.files[0]);
    };

    reader.onloadend = () => {
      setProfileImageURL(reader.result);
      image = reader.result;
      console.log(image);
    };

    reader.readAsDataURL(e.target.files[0]);

    setButtonAttribute({
      content: '가입 완료',
      onClick: handleCompleteButtonClick,
    });
    setSkipButton('');
  };

  const [buttonAttribute, setButtonAttribute] = useState({
    content: '갤러리 이동',
    onClick: handleUploadButtonClick,
  });

  const [skipButton, setSkipButton] = useState(
    <SkipButton content="건너뛰기" />
  );

  return (
    <Container>
      <SectionHeader
        title="프로필사진 등록"
        mt={2.8}
        mb={7.5}
        handleGoBack={() => history.goBack()}
      />
      <ContentContainer>
        <ProfileImage src={profileImage} />
        <Title size="md">리퀘스터이름명</Title>
        <Paragraph size="sm" mt={8} mb={11.2}>
          회원님을 대표하는 사진을 등록해주세요!
        </Paragraph>
        <Button type="activate" {...buttonAttribute} />
        {skipButton}
      </ContentContainer>
      <input
        ref={ref}
        onChange={handleImageUpload}
        name="profileImage"
        type="file"
        accept="image/*"
        hidden
      />
    </Container>
  );
};

const ContentContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 100%;
  background: rgba(229, 229, 229, 0.29);
  border: 1px solid #d2d6da;
  margin-bottom: 3.5rem;
  object-fit: cover;
`;

const SkipButton = styled(Button)`
  margin-top: 12px;
`;

export default ProfileImageApply;
