import React from 'react';
import styled from 'styled-components';
import facebook from '../images/icon-facebook.svg';
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
      <Card socialMedia="facebook" />
      <Card socialMedia="twitter" />
      <Card socialMedia="instagram" />
      <Card socialMedia="youTube" />
    </DashBoardStyles>
  );
}
