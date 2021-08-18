import React from 'react';
import styled from 'styled-components';
import OverviewCard from '../Components/OverviewCard';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';
import youtube from '../images/icon-youtube.svg';
import iconUp from '../images/icon-up.svg';
import iconDown from '../images/icon-down.svg';

const OverViewStyles = styled.div`
  width: 100%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(1000px / 4), 1fr));
  gap: 2rem;
`;

function OverViews() {
  return (
    <OverViewStyles>
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
    </OverViewStyles>
  );
}

export default OverViews;
