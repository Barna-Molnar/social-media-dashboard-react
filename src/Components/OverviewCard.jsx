import React from 'react';
import styled from 'styled-components';

const OverViewCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 125px;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  border-radius: 8px;

  background-color: ${(p) => p.theme[p.theme.mode].cardBackground};
  overflow: hidden;

  .header {
    display: flex;
    justify-content: space-between;

    &__title {
      font-size: 14px;
      font-weight: 700;
      color: ${(p) => p.theme[p.theme.mode].blueText};
    }
  }
  .summary {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__views {
      font-size: 3rem;
      font-weight: 700;
      color: ${(p) => p.theme[p.theme.mode].colorText};
    }
    &__movement {
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 12px;
      font-weight: 700;
      color: ${(p) =>
        p.arrow.includes('up')
          ? p.theme.colors.limeGreen
          : p.theme.colors.brightRed};
      img {
        transform: ${(p) =>
          p.arrow.includes('up') ? 'translate(0, 25%)' : 'translate(0, 55%)'};
      }
    }
  }

  &:hover {
    background-color: ${(p) => p.theme[p.theme.mode].hover};
  }
`;

function OverviewCard({
  socialMedia,
  title,
  sum,
  movement = { icon: 'path', num: 99 },
}) {
  return (
    <OverViewCardStyles arrow={movement.icon}>
      <div className="header">
        <p className="header__title">{title}</p>
        <img
          src={socialMedia}
          alt="social-media-icon"
          className="header__img"
        />
      </div>
      <div className="summary">
        <div className="summary__views">{sum}</div>
        <div className="summary__movement">
          <img src={movement.icon} alt="" /> {movement.num}%
        </div>
      </div>
    </OverViewCardStyles>
  );
}

export default OverviewCard;
