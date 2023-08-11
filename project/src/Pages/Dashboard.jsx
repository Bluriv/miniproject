import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'



const Dashboard = () => {

  const [events,setEvents] = useState([])
  const getEvent = async () => {
    try{
        const ress = await axios.get(`http://localhost:3004/events?userId=${localStorage.getItem("userId")}`)
        setEvents(ress.data)
    }catch (error){
        console.log(error)
    }
}

useEffect(() => {
    getEvent()
},[])
  return (
    <div>
      <>
      <div>
      <Navbar/>
      <Cards/>
      </div>
      
      
      </>
    </div>
  )
}

export default Dashboard
