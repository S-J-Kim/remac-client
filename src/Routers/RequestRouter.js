import React from 'react';
import { Route } from 'react-router-dom';
import RequestFormPage from '../Request/RequestFormPage';

const RequestRouter = (props) => {
  const { match } = props;
  return (
    <>
      <Route path={match.url + '/form'} render={() => <RequestFormPage />} />
    </>
  );
};

export default RequestRouter;
