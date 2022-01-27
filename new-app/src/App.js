import React, {useState, useEffect} from 'react';
import './App.css';
import usePagination from './usePagination';
import { Pagination} from '@mui/material';
import axios from 'axios';
import FormDialog from './component/dialog';
import MaterialUiForm from './component/form';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);
  
  useEffect(() => {
      const getData = async () =>{
        try{
          const response = await axios.get('http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480');
          setData(response.data);
          setError(null);
        }catch (err) {
          setError(err.message);
          setData(null);
        }finally {
          setLoading(false);
        }
      };
      getData();
  },[]);
  
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
      <FormDialog title ="Add New Customer">
        <MaterialUiForm />
      </FormDialog>
      
      <Pagination 
        count ={count}
        size = "large"
        page = {page}
        variant = "outlined"
        onChange = {handleChange} 
        showFirstButton showLastButton/>

    </div>
    
  );
}

export default App;

