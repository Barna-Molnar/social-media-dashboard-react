import React from 'react';
import styled from 'styled-components';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import OverViews from './Components/OverViews';

const AppStyles = styled.div`
  .outer-container {
    padding: 5rem 15rem;
    width: 100vw;
    height: 100vh;
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
`;

function App() {
  return (
    <AppStyles>
      {/* <div className="background">
        <div className="topBg"></div>
        <div className="bottomBg"></div>
      </div> */}
      <div className="outer-container">
        <Navbar />
        <Dashboard />
        <h2 className="overView__title">Overview - Today</h2>
        <OverViews />
      </div>
    </AppStyles>
  );
}

export default App;
