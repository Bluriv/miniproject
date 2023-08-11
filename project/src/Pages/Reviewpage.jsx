import React, { useEffect, useState } from 'react'
import Button from '../Components/Button'
import Inputs from '../Components/Inputs'
import Stars from '../Components/Stars'
import axios from 'axios'

const Reviewpage = () => {
  const [komen, setKomen] = useState(null)
  const [input, setInput] = useState(
    {
      eventId: "5",
      userid: "2",
    comment: "latest comment",
    rate: 10,
    }
  )
  
  const getApi = async () => {
    try {
    const ress =  await axios.get("http://localhost:3004/comments")
      // console.log(ress);
      setKomen(ress.data)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(komen);

const postData = async () => {
  const res = await axios.post("http://localhost:3004/comments", input)
  console.log(res.data)
}

  useEffect(() => {
    getApi()
  }, [])

  return (
    <div className='h-72 bg-gradient-to-b from-cyan-700 to-blue-600 '>
        <div className=' text-white bg-gradient-to-b from-cyan-700'>
            <h1><b> PERTUNJUKAN WAYANG</b></h1>
        </div>
        <div className='text-white'>
            <h4><i>Did you enjoy the event? Leave us a short review!</i></h4>
        </div>
        {/* <Inputs /> */}
        <textarea className='border border-black h-[200px] w-[500px]'/>
        <div className='text-white'>
          Was it worth it? Please rate the event also!
          </div>
        {/* <Stars astarcss/> */}
        <button className='bg-slate-400 p-2' onClick={postData}>submit</button>
    </div>
  )
}

export default Reviewpage
