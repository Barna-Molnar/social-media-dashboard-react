import React, { useState } from 'react';
import styled from 'styled-components';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import OverViews from './Components/OverViews';

const AppStyles = styled.div`
  position: relative;

  .background {
    inset: 0;
    position: absolute;
    z-index: -1;
    isolation: isolate;
    .topBg {
      width: 100vw;
      height: 30vh;
      background-color: ${(p) => p.theme[p.mode].topBackground};
    }
    .bottomBg {
      width: 100vw;
      height: 100vh;
      background-color: ${(p) => p.theme[p.mode].background};
    }
  }
  .outer-container {
    margin: 0 auto;
    padding: 5rem 15rem;
    width: 100vw;
    max-width: 1440px;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .overView__title {
    align-self: flex-start;
    margin-top: 3rem;
    font-size: 2.2rem;
    letter-spacing: 1px;
    color: ${(p) => p.theme[p.mode].colorText};
    margin: 5rem 0 3rem 0;
  }

  @media only screen and (max-width: 562px) {
    .outer-container {
      padding: 5rem 2rem;
    }
  }
`;

function App() {
  const [colorTheme, setColorTheme] = useState('darkMode');

  const setMode = () => {
    colorTheme === 'lightMode'
      ? setColorTheme('darkMode')
      : setColorTheme('lightMode');
  };

  return (
    <AppStyles mode={colorTheme}>
      <div className="outer-container">
        <Navbar setMode={setMode} mode={colorTheme} />
        <Dashboard mode={colorTheme} />
        <h2 className="overView__title">Overview - Today</h2>
        <OverViews mode={colorTheme} />
      </div>
      <div className="background">
        <div className="topBg"></div>
        <div className="bottomBg"></div>
      </div>
    </AppStyles>
  );
}

export default App;
