import {Container } from './styles';
import searchImg from '../../assets/search.svg'
import { useState } from 'react';


const SearchBar = ():JSX.Element => {
  const [text, setText] = useState('');

  return(
    <Container>
      <input 
        type="text" 
        placeholder="Pesquisar reclamação"
        value={text}  
        onChange={(event) => setText(event.target.value)}
      />
      <img 
        src={searchImg} 
        alt="lupa" 
        className={text.length ? 'active' : ''}
      />
    </Container>
  )
}

export default SearchBar;