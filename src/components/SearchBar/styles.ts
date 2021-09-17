import styled from "styled-components";

export const Container = styled.div`

  border: 1px solid #d7d7d7;
  border-radius: 16px;
  background: white;
  padding: 6px 16px;
  display:flex;
  
  &:hover{
    box-shadow:2px 1px 4px 0px grey;
  }

  input {
    border: none;
    outline: none;
    font-size: 16px;
    width:13rem;
    &:focus{
      width:20rem;
    }
    transition: width 0.3s;
  }

  &>img {
    height:20px;

    &.active:hover {
      cursor: pointer;
      filter: brightness(0.5);
    }
  }
`;
