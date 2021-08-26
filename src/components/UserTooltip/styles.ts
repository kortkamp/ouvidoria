import styled from 'styled-components'

// import { lighten } from 'polished';

export const Container = styled.div`

  a {
    color: black;
    cursor: pointer;
    display:flex;
    

    & > img {
      height:1rem;
      margin-right: 0.2rem;
    }
  }

  #userMenuTooltip {
    display:flex;
    flex-direction:column;
    padding:0.5rem 0;

    width:12rem;
    
    opacity:1;

    box-shadow:0 0 0.5rem gray;
  }

  button {

    border:0;
    background:transparent;
    text-align:left;
    padding:0.2rem 1rem;;
    width:100%
    & + button {
      
    }
    &:hover {
      background:#2188ff;
      color:white;
    }
  }

  .tooltipHidden {
    background:red;
    display:none;
    visibility:hidden;
  }
`;