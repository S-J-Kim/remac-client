import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { AuthContextProvider } from './contexts/AuthContextProvider';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    margin: 0;
  }

  #root{
    display: flex;
    flex-direction: column;
    padding-top:5.1rem;
  }

  input{
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AuthContextProvider>
          <Header />
          <App />
        </AuthContextProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
