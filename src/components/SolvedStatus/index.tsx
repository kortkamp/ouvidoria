import {Container, RadioBox } from './styles';


import likeImg from '../../assets/like.svg';
import dislikeImg from '../../assets/dislike.svg';

interface ISolvedStatusProps {
  solved: boolean|undefined;
  type: 'edit'|'view';
  changeSolved:(solved:boolean)=>void;
}

const SolvedStatus = ({solved, type, changeSolved}:ISolvedStatusProps):JSX.Element => {

  async function handleClick(newSolvedStatus:boolean){
    if(newSolvedStatus !== solved){
      changeSolved(newSolvedStatus);
    }
  }

  return (
    <Container>
      { type==='edit' ? 
        <>
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
        </>
      :
        <span>O usuário marcou esta reclamação como {!solved && 'não'} solucionada</span>
      }
    </Container>
  )
}

export default SolvedStatus;