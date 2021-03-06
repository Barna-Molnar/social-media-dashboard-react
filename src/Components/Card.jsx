import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
  .card {
    position: relative;
    padding: 2rem 6rem;
    width: 100%;
    height: 215px;
    border-radius: 4px;
    background-color: ${(p) => p.theme[p.mode].cardBackground};
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: all 0.2s;
    cursor: pointer;

    &__header {
      display: flex;
      align-items: center;
      justify-content: center;
      &--name {
        font-size: 13px;
        color: ${(p) => p.theme[p.mode].blueText};
        margin-left: 1rem;
      }
    } // header end
    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      .view {
        margin-top: 1rem;
        font-size: 5.5rem;
        font-weight: 800;
        color: ${(p) => p.theme[p.mode].colorText};
      }
      h3 {
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: ${(p) => p.theme[p.mode].blueText};
      }
    } // body end
    &__footer {
      display: flex;
      align-items: center;
      color: ${(p) =>
        p.arrow.includes('up')
          ? p.theme.colors.limeGreen
          : p.theme.colors.brightRed};
      gap: 5px;
      &--text {
        font-size: 12px;
        font-weight: 700;
      }
      &--img {
        display: flex;
        align-items: center;
        transform: ${(p) =>
          p.arrow.includes('up') ? 'translate(0, 25%)' : 'translate(0, 55%)'};
      }
    } //footer end
  } // card end
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 4px;
    background: ${(p) => p.theme.colors[p.socialMedia]};
  }
  .card:hover {
    background-color: ${(p) => p.theme[p.mode].hover};
  }
`;

export default function Card({
  mode,
  socialMedia,
  icon,
  arrow,
  sum,
  title = 'followers',
  views,
}) {
  console.log(arrow);
  return (
    <CardStyles socialMedia={socialMedia} arrow={arrow} mode={mode}>
      <div className="card">
        <div className="card__header">
          <img className="card__header--img" src={icon} alt="facebook-icon" />
          <h5 className="card__header--name">@nathan</h5>
        </div>
        <div className="card__body">
          <p className="view">{sum}</p>
          <h3>{title}</h3>
        </div>
        <div className="card__footer">
          <div className="card__footer--img">
            <img src={arrow} alt="arrow-icon" />
          </div>
          <p className="card__footer--text">{views} Today</p>
        </div>
      </div>
    </CardStyles>
  );
}
