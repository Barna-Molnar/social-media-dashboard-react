import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import OverviewCard from '../Components/OverviewCard';
import { overViewCardsData as CardsData } from '../data/data';

const OverViewStyles = styled.div`
  width: 100%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(1000px / 4), 1fr));
  gap: 2rem;
`;

function OverViews({ mode }) {
  return (
    <ThemeProvider theme={{ mode: mode }}>
      <OverViewStyles>
        {CardsData.map((card) => {
          return (
            <OverviewCard
              socialMedia={card.socialMedia}
              title={card.title}
              sum={card.sum}
              movement={card.movement}
            />
          );
        })}
      </OverViewStyles>
    </ThemeProvider>
  );
}

export default OverViews;
