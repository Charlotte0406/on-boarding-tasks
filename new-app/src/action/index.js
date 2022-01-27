import axios from "axios";
import { combineReducers } from 'redux';
import reducer from "../feature/addReducer";

const reducers = combineReducers({
    form: formReducer
})

export default reducers;

// export function addUser(){
//     return (dispatch) =>{
//         return axios.get(),
//         then ((response) =>{
//             dispacth( addUser(response.data))
//         })
//     }

//     export function addUser(user){
//         return {
//             type: "ADD_USER",
//             description: {...user}
//         }
//     }

// }