import styled from "styled-components";

export const Container = styled.a`
  
  background:var(--red);
  border-radius:4px;
  border:0;

  height: 40px;
  padding: 10px 16px 11px;
  
  color:white;
  font-size:14px;
  font-weight:600;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:16px;

  max-width: 300px;
  min-width: 150px;
  transition: background 0.2s ease 0s;
  text-decoration: none;

  &:hover{
    background: rgb(190, 28, 35);
  }
  svg {
    color:white;
    fill:white;
    height:24px;
  }
    
`;