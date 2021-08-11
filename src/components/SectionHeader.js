import React from 'react';
import styled from 'styled-components';
import { marginControl } from './Text';
const SectionHeader = (props) => {
  const { title, mt, mb, handleGoBack } = props;

  return (
    <SectionHeaderContainer mt={mt ? mt : 2.8} mb={mb} onClick={handleGoBack}>
      <BackButton src={process.env.PUBLIC_URL + '/backbutton.svg'} />
      <SectionTitle>{title}</SectionTitle>
    </SectionHeaderContainer>
  );
};

const SectionHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${marginControl}
`;

const BackButton = styled.img`
  width: 10px;
  margin-right: 1.3rem;
`;

const SectionTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #292929;
  line-height: 2.4rem;
  font-style: normal;
`;

export default SectionHeader;
