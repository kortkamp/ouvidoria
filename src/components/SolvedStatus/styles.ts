import styled from "styled-components";

import { darken, transparentize } from 'polished';




export const Container = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface IRadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33FF95',
  red: '#e52e4d',
};

export const RadioBox = styled.button<IRadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) => (props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent')
  };
  

 
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
    background: ${(props) => transparentize(0.95, colors[props.activeColor])
  };
  }
  img {
    height: 30px;
    width: 30px;
  }
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-tittle);
  }

`;