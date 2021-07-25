import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RequesterSignUpView from './RequesterSignUpView';
import LoginView from './LoginView';
import ProfileImageApply from './ProfileImageApply';
import CreatorSignUpView from './CreatorSignUpView';
import SignupCompleteView from './SignupCompleteView';

function App() {
  return (
    <Switch>
      <Route path="/login" render={() => <LoginView />} />
      <Route
        path="/signup"
        exact
        render={() => <RequesterSignUpView />}
        // <ProfileImageApply />;
      />
      <Route
        path="/creatorsignup"
        render={() => <CreatorSignUpView />}
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
    </Switch>
  );
}

export default App;
