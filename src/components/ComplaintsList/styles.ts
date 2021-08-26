import styled from 'styled-components';

export const Container = styled.ul`
  li {

    position:relative;
    list-style-type: none;
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;    

    & + li {
      margin-top:2rem;
    }

    header {
      color:black;
      font-size:1rem;
      display:flex;
      justify-content:space-between;
      align-items:center;
      & > div {
        display:flex;
        span {
          
          display:flex;
          align-items:center;
          
          margin-right:1rem;
          gap: 0.3rem;
          img {
            
            height: 0.8rem;
          }
        }

      }

      .pendente {
        color:red;
      }
      .resolvida {
        color:green;
      }
    }

    p {
      margin-top:1rem;
      font-size:1.1rem;
    }


    & > img {

      position: absolute;
      top:0.5rem;
      right:1rem;


      &:hover {
        cursor: pointer;
      }
    }
  }

  .imageArea {
    padding: 2rem 0;
    img {
      width:20rem;
    }
  }
`;

export const Answer = styled.ul`

  li{

  
  border: 1px solid rgb(120,120,120,0.5);
  border-radius: 0.3rem;
  background: #f8f9ff;

  header {
    
    margin-bottom:1rem;
    color: rgb(75, 89, 99);
    display:flex;
    justify-content:space-between;
    strong {
      font-size:1.2rem;
    }
    span {
      font-size:0.9rem;
    }
  }
  p {
    
  }
  }
`;
