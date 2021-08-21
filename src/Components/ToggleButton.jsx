import React from 'react';
import styled from 'styled-components';

const ToggleButtonStyles = styled.div`
  display: flex;
  cursor: pointer;
  input[type='checkbox'] {
    position: relative;
    width: 4.2rem;
    height: 2.2rem;
    -webkit-appearance: none;
    background: ${(p) => p.theme.colors.toggle};
    outline: none;
    transition: 0.5s;
    border-radius: 50px;
    margin: 0 1rem 0 1rem;
  }

  input[type='checkbox']:before {
    content: '';
    position: absolute;
    left: 3px;
    top: 2px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${(p) => p.theme[p.mode].topBackground};
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
    transition: 0.5s;
  }
  input:checked[type='checkbox']:before {
    left: 2rem;
  }

  @media only screen and (max-width: 768px) {
    /* input[type='checkbox'] {
      width: 4rem;
      height: 2.2rem;
      border-radius: 12px;
    }
    input[type='checkbox']:before {
      width: 14px;
      height: 14px;
      top: 4px;
    }
    input:checked[type='checkbox']:before {
      left: 2.2rem;
    } */
  }
`;

export default function ToggleButton({ setMode, mode }) {
  return (
    <ToggleButtonStyles mode={mode}>
      <input type="checkbox" onClick={setMode} />
    </ToggleButtonStyles>
  );
}
