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
    transition: 0.5s;
  }
  input:checked[type='checkbox']:before {
    left: 2rem;
  }
`;

export default function ToggleButton({ setMode, mode }) {
  return (
    <ToggleButtonStyles mode={mode}>
      <input type="checkbox" onClick={setMode} />
    </ToggleButtonStyles>
  );
}
