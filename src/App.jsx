import React from 'react';
import styled from 'styled-components';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import OverViews from './Components/OverViews';

const AppStyles = styled.div`
  position: relative;
  height: 100%;
  .background {
    inset: 0;
    position: absolute;
    z-index: -1;
    isolation: isolate;
    .topBg {
      width: 100vw;
      height: 30%;
      background-color: ${(p) => p.theme.darkMode.topBackground};
    }
    .bottomBg {
      width: 100vw;
      height: 70%;
      background-color: ${(p) => p.theme.darkMode.background};
    }
  }
  .outer-container {
    margin: 0 auto;
    padding: 5rem 15rem;
    width: 100vw;
    max-width: 1440px;
    height: 100%;
    /* background-color: aqua; */
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
    color: ${(p) => p.theme.darkMode.colorText};
    margin: 5rem 0 3rem 0;
  }

  @media only screen and (max-width: 562px) {
    .outer-container {
      padding: 5rem 2rem;
    }
  }
`;

function App() {
  return (
    <AppStyles>
      <div className="outer-container">
        <Navbar />
        <Dashboard />
        <h2 className="overView__title">Overview - Today</h2>
        <OverViews />
      </div>
      <div className="background">
        <div className="topBg"></div>
        <div className="bottomBg"></div>
      </div>
    </AppStyles>
  );
}

export default App;
