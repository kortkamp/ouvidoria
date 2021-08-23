
import {Container} from './styles'
interface IAnswer {
  id:string;
  message:string;
  deadline:number;
  created_at:string;
  user:{
    name:string;
    admin:boolean;
  }
}

interface IComplaint {
  id:string;
  message:string;
  image:string;
  created_at:string;
  user:{
    name:string;
    admin:boolean;
  }
  answers: IAnswer[];
}

interface IComplaintsListProps {
  complaints:IComplaint[];
}
const ComplaintsList = ({complaints}:IComplaintsListProps): JSX.Element => {

  return(
    <Container>
          {complaints.map((complaint)=>{
            const status = complaint.answers.length ? 'fechada' : 'aberta';
            return(
              <li key={complaint.id} >
                <div className='complaintTitle'>
                  <span>{complaint.user.name}</span>
                  <span> em {
                    new Intl.DateTimeFormat('pt-BR').format(
                    new Date(complaint.created_at),
                  )}
                  </span>
                  <span className={status}>{status}</span>
                </div>
                <p>
                  {complaint.message}
                </p>
              
              </li>
            )
            })}  
    </Container>
  )
}

export default ComplaintsList;