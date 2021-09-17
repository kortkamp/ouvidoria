import styled from "styled-components";

export const Container = styled.form`

  max-width:var(--page-width);
  margin: 0 auto;
  padding: 3rem 0;

  display:flex;
  justify-content:center;
  align-items:stretch;
  flex-direction:column;
  max-width: 576px;
  
  gap:1rem;


  h2{
    text-align:center;
  }
  input , textarea, select, label, button{
    
    padding:0.7rem;
    font-size:1rem;
    border-radius:0.3rem;

  }


  button {
      width: 100%;
      padding: 0 1.5rem;
      height: 3rem;
      background: var(--light-red);
      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      font-weight: 600;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }
`;

export const Sucess = styled.div`
  max-width:var(--page-width);
  margin: 0 auto;
  padding: 7rem 0;

  gap: 20px;

  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  button {

    height:40px;
    width: 100px;
    border-radius: 4px;
    border: 0;
    background: var(--light-green);
    
    &:hover {
      background: var(--green);
    }
    span {
      font-size: 1rem;
    }

    img {
      height: 1rem;
      margin-right: 10px;
    }
  }


`;