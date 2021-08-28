import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    text-align:center;
  }
  ul {
    display: flex;
    justify-content:space-around;
    flex-wrap:wrap;
  }
  li { 
    list-style: none;
    border: 1px solid gray;
    border-radius: 0.5rem;
    padding: 1rem;
    margin:1rem;

    width: 25rem;

    background:var(--blue);
    color:white;
    transition: box-shadow 0.2s;
  
    &:hover {
      box-shadow:0 1rem 2rem gray;
    }
  }

  
`;