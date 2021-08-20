import styled from 'styled-components'

import { lighten } from 'polished';

export const Container = styled.div`

  

  a {
    color: black;
    cursor: pointer;
    &:hover {
      color: ${lighten(0.3, 'black')}
    }
  }

  #userMenu {
    display:flex;
    flex-direction:column;

    width:10rem;
    
    opacity:1;

    box-shadow:0 0 0.5rem gray;
  }

  button {

    border:none;
    background:transparent;
    text-align:left;

    & + button {
      margin-top:0.5rem;
    }
    &:hover {
      color: ${lighten(0.2, 'black')}
    }
  }
`;