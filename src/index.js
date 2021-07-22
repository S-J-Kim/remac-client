import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
  }

  body{
    margin: 0;
  }

  #root{
    margin: 0 15px;
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
