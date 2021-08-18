import React from 'react';
import styled from 'styled-components';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import OverviewCard from './Components/OverviewCard';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg';
import youtube from './images/icon-youtube.svg';
import iconUp from './images/icon-up.svg';
import iconDown from './images/icon-down.svg';

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
  .overView-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
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
        <div className="overView-container">
          <OverviewCard
            socialMedia={facebook}
            title={'Page Views'}
            sum={'87'}
            movement={{ icon: iconUp, num: 3 }}
          />
          <OverviewCard
            socialMedia={facebook}
            title={'Likes'}
            sum={'52'}
            movement={{ icon: iconDown, num: 2 }}
          />
          <OverviewCard
            socialMedia={instagram}
            title={'likes'}
            sum={'5462'}
            movement={{ icon: iconUp, num: 2257 }}
          />
          <OverviewCard
            socialMedia={instagram}
            title={'Profile  Views'}
            sum={'52k'}
            movement={{ icon: iconUp, num: 1375 }}
          />
          <OverviewCard
            socialMedia={twitter}
            title={'Retweets'}
            sum={'117'}
            movement={{ icon: iconUp, num: 303 }}
          />
          <OverviewCard
            socialMedia={twitter}
            title={'Likes'}
            sum={'507'}
            movement={{ icon: iconUp, num: 563 }}
          />
          <OverviewCard
            socialMedia={youtube}
            title={'Likes'}
            sum={'107'}
            movement={{ icon: iconDown, num: 19 }}
          />
          <OverviewCard
            socialMedia={youtube}
            title={'Total Views'}
            sum={'1407'}
            movement={{ icon: iconDown, num: 12 }}
          />
        </div>
      </div>
    </AppStyles>
  );
}

export default App;
