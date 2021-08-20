import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components'
import Theme from './theme/theme';
import GlobalStyles from './theme/GlobalStyle'

ReactDOM.render(

  <React.StrictMode>

    <ThemeProvider theme={Theme}>

      <GlobalStyles />
      {/* <div className="background">
        <div className="topBg"></div>
        <div className="bottomBg"></div>
      </div> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
