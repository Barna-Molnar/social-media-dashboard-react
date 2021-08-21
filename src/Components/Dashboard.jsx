import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { dashBoardCArdsData as CardsData } from '../data/data';

const DashBoardStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(1000px / 4), 1fr));
  gap: 2rem;
`;

export default function Dashboard({ mode }) {
  return (
    <DashBoardStyles>
      {CardsData.map((card) => {
        return (
          <Card
            mode={mode}
            socialMedia={card.socialMedia}
            icon={card.icon}
            arrow={card.arrow}
            title={card.title ? card.title : ''}
            sum={card.sum}
            views={card.views}
          />
        );
      })}
    </DashBoardStyles>
  );
}
