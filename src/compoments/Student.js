import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { useState } from 'react';
import Button from '@mui/material/Button';

const ariaLabel = { 'aria-label': 'description' };
export default function Student() {
    //useState set name and address:
    // eslint-disable-next-line no-undef
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        const student = {name, address};
        console.log("student : ", student);
        fetch("http://localhost:8080/student/add",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(student)
        }).then(() => {
            console.log("new student added");
        })
    }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
       <form>
       <Input placeholder="Name : " inputProps={ariaLabel} 
           value = {name}
           onChange = {(e) => setName(e.target.value)}
       />
       <br></br>
       <br></br>
       <Input placeholder="Address : " inputProps={ariaLabel} 
            value = {address}
            onChange = {(e) => setAddress(e.target.value)}
       />
       <br></br>
       <br></br>
       <Button variant="outlined" onClick={handleClick}>Submit</Button>
       </form>
    </Box>
    //=================================
  );
}
