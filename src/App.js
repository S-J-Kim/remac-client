import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginView from './login';
import ProfileImageApply from './ProfileImageApply';

function App() {
  return (
    <Switch>
      <Route path="/login" render={() => <LoginView />} />
      <Route path="/signup" render={() => <ProfileImageApply />} />
    </Switch>
  );
}

export default App;
