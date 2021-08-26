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

    .complaintTitle {
      color:black;
      font-size:0.8rem;

      span {
        margin-right:1rem;
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

  padding-top:1rem;
  border-top: 1px solid grey;
  .answerTitle {
      color:black;
      font-size:0.8rem;

      span {
        margin-right:1rem;
      }

      
    }
`;
