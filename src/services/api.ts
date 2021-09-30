import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/api',
});

interface IGetComplaints {
  sourceType:string;
  sourceId:string;
  token:string;
  pageNumber:number;
  paginationLimit:number;
}

export const getComplaints  = async ({
  sourceType,
  sourceId,
  token,
  pageNumber,
  paginationLimit
}:IGetComplaints) => {

  try{
    const response = await api.get(`/complaints/${sourceType}/${sourceId}?page=${pageNumber}&limit=${paginationLimit}`,
      {
        headers: { Authorization: `Bearer ${token}`
      }
    })
    const loadedComplaints = (response.data.complaints) as [];
    const total = Math.ceil(response.data.total / paginationLimit);
    return({complaints:loadedComplaints,total})
  }
  catch(err){

  }
}

