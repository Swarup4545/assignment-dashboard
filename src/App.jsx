import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from './component/DashBoard';
import Dashnav from './component/Dashnav';
import Nav from './component/Nav';
import './App.css'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
     <BrowserRouter>
      <div className='flex'>
      <Dashnav show={show} setShow={setShow}/>
      <div className='w-full'>
        <Nav show={show} setShow={setShow}/>
        <Routes>
        <Route path='/' element={<DashBoard/>}></Route>
        {/* <Route path='/team' element={<Team/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/calender' element={<Calender/>}></Route>
        <Route path='/document' element={<Documents/>}></Route>
        <Route path='/report' element={<Report/>}></Route> */}
      </Routes>
      </div>
      
      </div>
      
      </BrowserRouter>
    </>
  )
}

export default App
