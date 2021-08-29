import { FormEvent, useState } from 'react';
import {Container} from './styles';

interface ISubmitanswer {
  complaint_id:string;
  message:string;
}

interface IAnswerFormProps {
  complaintId:string;
  handleSubmitAnswer: (answer:ISubmitanswer)=> void;
  show:boolean;
}

const AnswerForm = ({complaintId, handleSubmitAnswer, show}:IAnswerFormProps):JSX.Element => {

  const [message, setMessage] = useState('');

  async function handleSubmit(event:FormEvent) {
    event.preventDefault();

    await handleSubmitAnswer({complaint_id:complaintId , message});

    setMessage('');
  }

  return(
    <Container className={show ? 'show' : ''} onSubmit={handleSubmit}>
      <textarea 
        name="answer"
        id="answer" 
        cols={ 30 }
        rows={ 10 }
        placeholder="Digite a resposta para essa reclamação"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      ></textarea>
      <button type="submit">Enviar Resposta</button>
    </Container>
  )
}

export default AnswerForm;