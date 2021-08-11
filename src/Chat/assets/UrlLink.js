import React from 'react';
import styled from 'styled-components';

const VideoURL = styled.a`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.pink};
  text-decoration: none;
`;

const UrlLink = (props) => {
  const { children } = props;

  return <VideoURL href={children}>{children}</VideoURL>;
};

export default UrlLink;
