import styled from "styled-components";

export const Container = styled.div`

  //max-width:var(--page-width);
  background-size:cover;

  display:flex;
  align-items:center;
  justify-content:center;

  width: 100%;
  height: calc(100vh - 4rem);
  
  
  padding: 3rem;
  border-radius: 0.25rem;

  .errorMessage {
    span {
      color:red;
    }
  }

  form {

    padding: 30px;
    width: 600px;
    border: 1px solid grey;
    border-radius: 8px;
    background: var(--background);
    max-width: 576px;
    
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:left;
    gap: 10px;

    h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      margin-bottom: 0rem;
    }
    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 3rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      background: #e7e9ee;
      font-weight: 400;
      font-size: 1rem;
      &::placeholder {
        color: var(--text-body);
      }
      & + input {
        margin-top: 1rem;
      }
    }
    button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 3rem;
      background: var(--green);
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

    & > div {
      
      height: 3rem;
      display:flex;
      align-items:center;
      justify-content:flex-start;
      input {
        width:auto;
      }
      span {
        margin-left:0.7rem;
      }
    }

  }
  
`;