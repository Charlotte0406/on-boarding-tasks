import React from "react";
import { useSelector } from "react-redux";
import { getContactList } from "../slicers/contactSlice";

const addNewContactList = () =>{
    const data = useSelector((state) => state.contact.cellections);
    useEffect(() => {
        getContactList();
    },[getContactList]);

    return(
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
            {data.map((item) => {
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
        </div>
  
    )
}

export default addNewContactList;