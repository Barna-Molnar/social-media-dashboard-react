import React from 'react';
import styled from 'styled-components';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';
import youtube from '../images/icon-youtube.svg';
import iconUp from '../images/icon-up.svg';
import iconDown from '../images/icon-down.svg';
import Card from './Card';

const DashBoardStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export default function Dashboard() {
  return (
    <DashBoardStyles>
      <Card
        socialMedia="facebook"
        icon={facebook}
        arrow={iconUp}
        sum={'1987'}
        views={'12'}
      />
      <Card
        socialMedia="twitter"
        icon={twitter}
        arrow={iconUp}
        sum={'1044'}
        views={'99'}
      />
      <Card
        socialMedia="instagram"
        icon={instagram}
        arrow={iconUp}
        sum={'11k'}
        views={'1099'}
      />
      <Card
        socialMedia="youTube"
        icon={youtube}
        arrow={iconDown}
        title={'subsrcibers'}
        sum={'8239'}
        views={'144'}
      />
    </DashBoardStyles>
  );
}
