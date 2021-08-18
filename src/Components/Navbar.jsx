import React from 'react';
import styled from 'styled-components';
import ToggleButton from './ToggleButton';

const NavBarStyls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  .navBar {
    &__title {
      font-size: 2.6rem;
      color: ${(p) => p.theme.darkMode.colorText};
    }
    &__subTitle {
      font-size: 15px;
      color: ${(p) => p.theme.darkMode.blueText};
    }
  }

  .buttonContainer {
    display: flex;
    align-items: center;

    .btnLabel {
      color: ${(p) => p.theme.darkMode.blueText};
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
`;

export default function Navbar() {
  return (
    <NavBarStyls>
      <div className="navBar">
        <h2 className="navBar__title">Social Media Dashboard</h2>
        <h5 className="navBar__subTitle">Total followers: 23,004</h5>
      </div>
      <div className="buttonContainer">
        <label className="btnLabel">Dark Mode</label>
        <ToggleButton />
      </div>
    </NavBarStyls>
  );
}
