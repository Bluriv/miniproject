//oh ini untuk validasi
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const Nextpage = useNavigate()

    const [input, setInput]= useState(
        {email:"", password:""}
    )
    const handleChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        const newInput = {...input}
        newInput[e.target.name] = e.target.value
        setInput(newInput)
    }
    // console.log(input)
    //ini namanya penyetingan local storage1
    const onLogin = async (email, password) => {
        try{ //? artinya mnegecheck apakah data tersebut ada di database atua enggak?
            const ress = await axios.get(`http://localhost:3004/users?email=${email}&password=${password}`)
            if(ress.data.length > 0) {
                localStorage.setItem("userId",ress.data[0].id)
                alert(`selamat ${ress.data[0].nama_lengkap} Jenglot crispy :V `)
                console.log(ress.data[0].id)
                Nextpage("/Pagecard")
            } else{
                alert("Kuntilanak")
            }
           
        }catch (error) {
            console.log(error)
        }
    }

    const getEvent = async () => {
        try{
            const ress = await axios.get(`http://localhost:3004/events?userId=${localStorage.getItem("userId")}`)
            console.log(ress.data)
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getEvent()
    },[])
return (
    <div className='wrapper01 flex justify-center '>
        <div>
        </div>
        <div className='flex-row justify-center bg-gradient-to-tr from-green-400 to-blue-400 border border-slate-800 mx-5'>
        <div className='p-5'>
        <label> Input Email </label>
        <input value={input.email} name ="email" onChange= {handleChange}className = 'flex 'type='email' placeholder='input email'/>
        <label> Input Password</label>
        <input value={input.password}name ="password" onChange={handleChange}className = 'flex border border-slate-600  py-1 'type= 'password' placeholder='input pass'/>
        
        <button onClick ={() => {onLogin(input.email, input.password)}} className=' flex border border-slate-600 px-6 py-1 '> Submit </button>
        </div>
        </div>
      
    </div>
  )
}

export default Login
