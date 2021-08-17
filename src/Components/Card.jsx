import React from 'react';
import styled from 'styled-components';
import facebook from '../images/icon-facebook.svg';
import iconUp from '../images/icon-up.svg';

const CardStyles = styled.div`
  .card {
    position: relative;
    padding: 2rem 6rem;
    width: 100%;
    height: 200px;
    border-radius: 4px;
    background-color: ${(p) => p.theme.darkMode.cardBackground};
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    &__header {
      display: flex;
      align-items: center;
      justify-content: center;
      &--name {
        font-size: 13px;
        color: ${(p) => p.theme.darkMode.blueText};
        margin-left: 1rem;
      }
    } // header end
    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      .view {
        font-size: 5rem;
        font-weight: 800;
        color: ${(p) => p.theme.darkMode.colorText};
      }
      h3 {
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: ${(p) => p.theme.darkMode.blueText};
      }
    } // body end
    &__footer {
      display: flex;
      align-items: center;
      color: ${(p) => p.theme.colors.limeGreen};
      gap: 5px;
      &--text {
        font-size: 12px;
        font-weight: 700;
      }
    }
  } // card end
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 4px;
    background: ${(p) => p.theme.colors[p.socialMedia]};
  }
`;

export default function Card({ socialMedia }) {
  console.log(socialMedia);
  return (
    <CardStyles socialMedia={socialMedia}>
      <div className="card">
        <div className="card__header">
          <img
            className="card__header--img"
            src={facebook}
            alt="facebook-icon"
          />
          <h5 className="card__header--name">@nathan</h5>
        </div>
        <div className="card__body">
          <p className="view">1987</p>
          <h3>Followers</h3>
        </div>
        <div className="card__footer">
          <img className="card__footer--img" src={iconUp} alt="" />
          <p className="card__footer--text">12 Today</p>
        </div>
      </div>
    </CardStyles>
  );
}
