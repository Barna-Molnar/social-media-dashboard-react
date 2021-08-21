import React from 'react';
import styled from 'styled-components';
import ToggleButton from './ToggleButton';

const NavBarStyls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  .navBar {
    line-height: 1.5;
    &__title {
      font-size: 2.6rem;
      color: ${(p) => p.theme[p.mode].colorText};
    }
    &__subTitle {
      font-size: 15px;
      color: ${(p) => p.theme[p.mode].blueText};
    }
  }

  .buttonContainer {
    display: flex;
    align-items: center;

    .btnLabel {
      color: ${(p) => p.theme[p.mode].blueText};
      font-weight: 700;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 562px) {
    flex-direction: column;
    margin-bottom: 3rem;

    .buttonContainer {
      margin-top: 2rem;
      padding: 2rem 0;
      justify-content: space-between;
      border-top: 1px solid hsla(228, 34%, 66%, 0.2);
    }
  }
`;

export default function Navbar({ setMode, mode }) {
  return (
    <NavBarStyls mode={mode}>
      <div className="navBar">
        <h2 className="navBar__title">Social Media Dashboard</h2>
        <h5 className="navBar__subTitle">Total followers: 23,004</h5>
      </div>
      <div className="buttonContainer">
        <label className="btnLabel">Dark Mode</label>
        <ToggleButton setMode={setMode} mode={mode} />
      </div>
    </NavBarStyls>
  );
}
