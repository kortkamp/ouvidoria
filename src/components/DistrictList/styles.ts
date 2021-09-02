import styled from 'styled-components';

export const Container = styled.div`
   
  ul {
    display: flex;
    justify-content:space-between;
    flex-wrap:wrap;
    gap:40px;
  }
  li { 
    margin: 0 auto;
    position:relative;
    list-style: none;
    border: 1px solid gray;
    border-radius: 0.5rem;
    
    height:140px;
    width: 400px;

    background:var(--blue);
    color:white;
    transition: box-shadow 0.2s;
    font-size: 1.1rem;
    font-weight:600;
    
    text-shadow: 0px 0px 20px black,0px 0px 7px black;
    overflow: hidden;

    &:hover .child,
    &:focus .child {
      transform: scale(1.1);
    }

    .child {
      
      height:100%;
      width:100%;

      padding:20px;
      background-position: center;
      background-size: cover;

      transition: all .5s;

    }
    
  
    &:hover {
      box-shadow:0 1rem 2rem gray;
      cursor: pointer;
    }

    h3 {
      position:absolute;
      top:16px;
      left:20px;
      font-size: 1.4rem;
    }
  }
  
`;