import styled from "styled-components";

export const Container = styled.div`

  padding: 2rem 0;

  div{
    margin: 0 auto;
    width:15rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  ul {
    font-size:1.4rem;
    display:flex;
    flex-direction:row;
    gap:1rem;
    margin: 0 1rem;
  }
  li {
    list-style-type: none;

    &.selected {
      border:1px solid blue;
      
    }

    &:not(.selected){
      cursor: pointer;
    }
  }

  button {
    font-size:2rem;
    border:none;
  }
  
`;