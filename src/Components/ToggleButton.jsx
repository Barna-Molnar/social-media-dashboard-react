import React from 'react';
import styled from 'styled-components';

const ToggleButtonStyles = styled.div`
  display: flex;
  input[type='checkbox'] {
    position: relative;
    width: 4.2rem;
    height: 2.2rem;
    -webkit-appearance: none;
    background: ${(p) => p.theme.darkMode.toggle};
    outline: none;
    transition: 0.5s;
    border-radius: 50px;
    /* box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4); */
    margin: 0 1rem 0 1rem;
  }
  input:checked[type='checkbox'] {
    background: var(--soft-cyan);
    /* box-shadow: inset 0 0 5px hsla(174, 86%, 45%, 1); */
  }

  input[type='checkbox']:before {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${(p) => p.theme.darkMode.topBackground};
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
    transition: 0.5s;
  }
  input:checked[type='checkbox']:before {
    left: 1.7rem;
  }

  @media only screen and (max-width: 768px) {
    input[type='checkbox'] {
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
    }
  }
`;

export default function ToggleButton({ isDark, setIsDark }) {
  const setMode = () => {
    return setIsDark(!isDark);
  };

  return (
    <ToggleButtonStyles>
      <input type="checkbox" onClick={setMode} />
    </ToggleButtonStyles>
  );
}
