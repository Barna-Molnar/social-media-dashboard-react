import React from 'react';
import styled from 'styled-components';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';

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
      </div>
    </AppStyles>
  );
}

export default App;
