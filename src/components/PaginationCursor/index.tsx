import {Container} from './styles'

interface IPaginationProps {
  currentPage:number;
  totalPages:number;
  setPage: (page:number)=> void;
}

const PaginationCursor = ({currentPage,totalPages,setPage}:IPaginationProps): JSX.Element => {

  function handleIncrement() {
    if(currentPage < totalPages){
      const newPage = currentPage + 1;
      setPage(newPage);
    }
  }

  function handleDecrement() {
    if(currentPage > 1){
      const newPage = currentPage - 1;
      setPage(newPage);
    }
  }
  const pagesList = Array.from({length: totalPages}, (v, k) => k + 1);
  return(
    <Container>
      <div>
        <button onClick={handleDecrement}> {'<'} </button>
          <ul>
            {pagesList.map(page => (
              <li 
                key={page}
                className={page === currentPage ? 'selected': ''}
                onClick={page !== currentPage ? ()=>setPage(page) : ()=>{}}
              >{page}</li>
            ))}
          </ul>
        
        <button onClick={handleIncrement}> {'>'} </button>
      </div>
    </Container>
  )
}

export default PaginationCursor;