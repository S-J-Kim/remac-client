import React from 'react';
import styled from 'styled-components';

const SectionHeader = (props) => {
  const { title } = props;

  return (
    <SectionHeaderContainer>
      <BackButton src={process.env.PUBLIC_URL + 'backbutton.svg'} />
      <SectionTitle>{title}</SectionTitle>
    </SectionHeaderContainer>
  );
};

const SectionHeaderContainer = styled.div`
  width: 100%;
  margin-top: 2.8rem;
  display: flex;
  align-items: center;
`;

const BackButton = styled.img`
  width: 10px;
  margin-right: 1.3rem;
`;

const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #414141;
`;

export default SectionHeader;
