import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  html{
    font-size: 62.5%;
  }

  body{
    margin: 0;
  }

  #root{
    margin: 0 1.5rem;
    padding-top:5.1rem;
  }

  input{
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
