import styled from 'styled-components';

export const Container = styled.header`
    height: 4rem;
    width:100%;
    background:var(--green);
    color:var(--text-title);
    
    > div {
      margin: 0 auto;
      max-width:var(--page-width);
      display:flex;
      justify-content:space-between;
      padding:0.5rem 0.5rem;

      > div {
        display: flex;
        align-items:center;
        gap:1rem;
      }
    }
`;

export const TitleArea = styled.div`
  
  font-size:1.8rem; 
  img {
    width:4rem;
  }
`;

export const UserArea = styled.div`
  
`;