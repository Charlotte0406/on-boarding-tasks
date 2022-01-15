import React, {useState, useEffect} from 'react';
import './App.css';
import usePagination from './usePagination';
import { Pagination } from '@mui/material';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch('http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480')
      .then(res => {return res.json();})
      .then(data => { setData(data); })
  },[])  

  let [page, setPage] = useState(1);
  const perPage = 25;

  const count = Math.ceil(data.length / perPage);
  const Data = usePagination(data, perPage);

  const handleChange = (e,p) => {
    setPage(p);
    Data.jump(p);
  }
  return (
    <div>
      <table>
        <tr>
          <th><input type = 'checkbox' /></th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Job Title</th>
          <th>Edit</th>
          <th>View</th>
        </tr>
        {Data.currentData().map((item) => {
          return (
          <tr key={item.id}>
            <td><input type='checkbox'/></td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.address}</td>
            <td>{item.jobTitle}</td>
            <td><button >Edit</button></td>
            <td><button>View</button></td>
              
          </tr>
          )
        })}
      </table>
      <Pagination 
        count ={count}
        size = "large"
        page = {page}
        color='secondary'
        variant = "outlined"
        onChange = {handleChange} 
        showFirstButton showLastButton/>
    </div>
  );
}

export default App;

