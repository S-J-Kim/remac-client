import React from 'react';
import { Route } from 'react-router';
import RequesterSignUpPage from '../Auth/RequesterSignUpPage';
import ProfileImageApply from '../Auth/ProfileImageApply';
import CreatorSignUpPage from '../Auth/CreatorSignUpPage';
import SignupCompleteView from '../Auth/SignupCompleteView';

const AuthRouter = ({ match }) => {
  return (
    <>
      <Route
        path={`${match.url}` + '/requester'}
        exact
        render={() => <RequesterSignUpPage />}
      />
      <Route
        path={match.url + '/creator'}
        render={() => <CreatorSignUpPage />}
      />
      <Route
        path={match.url + '/profile'}
        exact
        render={() => <ProfileImageApply />}
      />
      <Route
        path={match.url + '/complete'}
        render={() => <SignupCompleteView userType="req" />}
      />
    </>
  );
};

export default AuthRouter;
