import styled from "styled-components";

export const Container = styled.form`
  display:flex;
  flex-direction:column;

  max-height: 0;
  overflow:hidden;

  transition: max-height 0.4s ease;

  &.show {
    max-height: 200px;
  }

  textarea {
    padding:10px;
    font-size:1rem;
    border-radius: 8px;
  }

  button {
    margin-top: 8px;
    font-size:0.9rem;
    border:0;
    border-radius: 4px;
    align-self: flex-end;
    padding:11px 16px;
    background:var(--green);
    font-weight:600;
    color:#fff;

    &:hover {
      background: var(--dark-green);
    }
  }

`;