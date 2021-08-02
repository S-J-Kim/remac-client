import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './Auth/LoginPage';
import Mypage from './Mypage/Mypage';
import RequestRouter from './Routers/RequestRouter';
import AuthRouter from './Routers/AuthRouter';
import MainPage from './Main/MainPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} render={() => <MainPage />} />
      <Route path="/login" render={() => <LoginPage />} />
      <Route path="/signup" render={(props) => <AuthRouter {...props} />} />
      <Route path="/mypage" render={() => <Mypage />} />
      <Route path="/request" render={(props) => <RequestRouter {...props} />} />
    </Switch>
  );
}

export default App;
