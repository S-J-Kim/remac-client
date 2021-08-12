import React, { useState } from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../components/Text';
import { DateTime } from 'luxon';

const DateDividerText = styled(Paragraph)`
  width: 100%;
  line-height: 1.5rem;
  text-align: center;
  vertical-align: middle;
  display: inline;
`;

const DateDivider = (props) => {
  const { messageSendAt } = props;
  const messageSendTime = DateTime.fromISO(messageSendAt, { locale: 'kr' });

  return (
    <DateDividerText mt={3} mb={1} size="xs">{`ㅡ ${messageSendTime
      .toFormat('DDDD')
      .slice(6)} ㅡ`}</DateDividerText>
  );
};

export default DateDivider;
