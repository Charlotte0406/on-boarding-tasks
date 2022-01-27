import * as React from 'react';
import '../App.css';
import { Field, reduxForm } from 'redux-form'
import { Button, TextField, InputAdornment, Divider} from '@mui/material';
import { AccountCircle, Email, Home, Phone, Work} from "@mui/icons-material"
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';


const required = value => value ? undefined : 'Required'
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const renderTextField = ({
  input,
  label,
  type,
  InputProps,
  meta: { touched, error }, 
  ...custom}) => (
    <TextField
    label={label}
    hintText={label} 
    placeholder={label} 
    type={type}
    error={touched && error}
    helperText={touched && error}
    InputProps= {InputProps}
    {...input}
    {...custom}
  /> 
  )
const MaterialUiForm = (props) => {
    const user =useSelector((state) => state.user.value);
    const { handleSubmit, pristine, handleCancelClick, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
        <Field 
        style={{marginBottom: '10px'} }
        fullWidth
        name={user.name}
        validate = {[required]}
        component={renderTextField}
        label="Full Name"
        InputProps={{
            startAdornment: (
            <InputAdornment position="start">
                <AccountCircle />
            </InputAdornment>),}}variant="outlined"/>
        <Field
        fullWidth
        style={{marginBottom: '10px'} }
        name={user.email}
        component={renderTextField} 
        label="Email" 
        validate={[required, email]}
        InputProps={{
            startAdornment: (
            <InputAdornment position="start">
                <Email />
            </InputAdornment>),}}variant="outlined"/>
        <Field
        style={{marginBottom: '10px'} }
        fullWidth
        name="adress" 
        component={renderTextField} 
        label="Home Address" 
        InputProps={{
            startAdornment: (
            <InputAdornment position="start">
                <Home />
            </InputAdornment>),}}variant="outlined"/>
        <Field
        style={{width:"49%"}}
        name="phoneNumber" 
        component={renderTextField} 
        label="Phone Number" 
        InputProps={{
        startAdornment: (
            <InputAdornment position="start">
                <Phone />
            </InputAdornment>),}}variant="outlined"/>
        <Field 
        style={{float:"right", width:"49%"}}
        name="jobTitle" 
        component={renderTextField} 
        label="Job Title" 
        InputProps={{
        startAdornment: (
            <InputAdornment position="start">
                <Work />
            </InputAdornment>),}}variant="outlined"/>

        <Divider style={{marginTop: "15px"}}/>

        <div style={{marginTop: "15px"}}>
            <Button 
            variant = "contained" 
            onClck={handleCancelClick} 
            style={{backgroundColor: 'grey', color:"white"}}>Cancel</Button>
            <Button 
            variant = "contained" 
            onClick={handleSubmit}
            method ="POST"
            style={{ backgroundColor: '#f1356d', float: "right", color:"white"}}>
            Submit</Button>    
      </div>
    </form>
  )
}

export default reduxForm({
    form: 'MaterialUi' // a unique identifier for this form
  })(MaterialUiForm)