import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RequesterSignUpPage from './RequesterSignUpPage';
import LoginPage from './LoginPage';
import ProfileImageApply from './ProfileImageApply';
import CreatorSignUpPage from './CreatorSignUpPage';
import SignupCompleteView from './SignupCompleteView';
import Mypage from './Mypage/Mypage';
import RequestFormPage from './RequestFormPage';

function App() {
  return (
    <Switch>
      <Route path="/login" render={() => <LoginPage />} />
      <Route
        path="/signup"
        exact
        render={() => <RequesterSignUpPage />}
        // <ProfileImageApply />;
      />
      <Route
        path="/creatorsignup"
        render={() => <CreatorSignUpPage />}
        // <ProfileImageApply />;
      />
      <Route
        path="/signup/profile"
        exact
        render={() => <ProfileImageApply />}
      />
      <Route
        path="/signup/complete"
        render={() => <SignupCompleteView userType="req" />}
      />
      <Route path="/mypage" render={() => <Mypage />} />
      <Route path="/request/form" render={() => <RequestFormPage />} />
    </Switch>
  );
}

export default App;
