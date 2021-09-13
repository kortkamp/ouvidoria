import { useState } from 'react';
import {Container, RadioBox } from './styles';


import likeImg from '../../assets/like.svg';
import dislikeImg from '../../assets/dislike.svg';

interface ISolvedStatusProps {
  status: boolean|undefined;
  type: 'edit'|'view';
}

const SolvedStatus = ({status, type}:ISolvedStatusProps):JSX.Element => {
  const [solved, setSolved] = useState(status);

  async function handleClick(solvedStatus:boolean){
    setSolved(solvedStatus);
  }

  return (
    <Container>
      <RadioBox
        type="button"
        onClick={() => handleClick(true)}
        isActive={solved === true}
        activeColor="green"
      >
        <img src={likeImg} alt="Like" />
        <span>Resolvido</span>
      </RadioBox>
      <RadioBox
        type="button"
        onClick={() => handleClick(false)}
        isActive={solved === false}
        activeColor="red"
      >
        <img src={dislikeImg} alt="Dislike" />
        <span>Não Resolvido</span>
      </RadioBox>
    </Container>
  )
}

export default SolvedStatus;