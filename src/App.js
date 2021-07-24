import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RequesterSignUpView from './RequesterSignUpView';
import LoginView from './LoginView';
import ProfileImageApply from './ProfileImageApply';
import CreatorSignUpView from './CreatorSignUpView';

function App() {
  return (
    <Switch>
      <Route path="/login" render={() => <LoginView />} />
      <Route
        path="/signup"
        render={() => <RequesterSignUpView />}
        // <ProfileImageApply />;
      />
      <Route
        path="/creatorsignup"
        render={() => <CreatorSignUpView />}
        // <ProfileImageApply />;
      />
    </Switch>
  );
}

export default App;
