import React from 'react'
import Dashboard from './Pages/Dashboard'
import {Routes, Route} from 'react-router-dom'
import Reviewpage from './Pages/Reviewpage'
import Login from './Pages/Login'
import Pagecard from './Pages/Pagecard'
import Reviewpagetest from './Pages/Reviewpagetest'
import ReviewBener from './Pages/ReviewBener'


const App = () => {
  return (
    <div>
    


      <Routes>
        <Route path = '/' element={<Dashboard/>}/>
        <Route path = '/Dashboard' element={<Dashboard/>} />
        <Route path = '/Review' element={<Reviewpage/>} />
        <Route path = '/Login' element={<Login/>} />
        <Route path = '/Pagecard' element={<Pagecard/>}/>
        <Route path = '/Revieww' elemnt={<Reviewpagetest/>}/>
        <Route path = '/Benar' element={<ReviewBener/>}/>
      </Routes>
    </div>
  )
}

export default App
