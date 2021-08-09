import React from 'react';
import { Route } from 'react-router-dom';
import RequestCheck from '../Request/RequestCheck';
import RequestFormPage from '../Request/RequestFormPage';
import RewardPaymentPage from '../Request/RewardPaymentPage';

const RequestRouter = (props) => {
  const { match } = props;
  return (
    <>
      <Route path={match.url + '/form'} render={() => <RequestFormPage />} />
      <Route
        path={match.url + '/reward'}
        render={() => <RewardPaymentPage />}
      />
      <Route path={match.url + '/check'} render={() => <RequestCheck />} />
    </>
  );
};

export default RequestRouter;
