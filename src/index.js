import React from 'react'
import ReactDOM from 'react-dom'
import Student from './compoments/Student';
import StudentAppBar from './compoments/StudentAppBar';
import DenseTable from './compoments/DenseTable';
const App = ()=>{
  return(
    <>
      <StudentAppBar/>
      <Student/>
      <DenseTable/>
    </>
  )
}
ReactDOM.render(<App/>,document.getElementById('root'));
