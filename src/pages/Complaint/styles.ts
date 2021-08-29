import styled from "styled-components";

export const Container = styled.form`

  max-width:var(--page-width);
  margin: 0 auto;
  padding: 3rem 0;

  display:flex;
  justify-content:center;
  align-items:stretch;
  flex-direction:column;
  
  gap:1rem;


  h2{
    text-align:center;
  }
  input , textarea, select, label, button{
    margin: 0 3rem;
    padding:0.7rem;
    font-size:1rem;
    border-radius:0.3rem;

  }


  button[type=submit] {
    background: var(--green);
    width:13rem;
    align-self: flex-end;
    font-size:1.2rem;
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