import {Container} from './styles'

interface IPaginationProps {
  page:number;
  total:number;
  setPage: (page:number)=> void;
}

const PaginationCursor = ({page,total,setPage}:IPaginationProps): JSX.Element => {
  return(
    <Container>
      1 2 3 4 5 6
    </Container>
  )
}

export default PaginationCursor;