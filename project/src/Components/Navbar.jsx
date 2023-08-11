import React from 'react'


const Navbar = () => {
  return (
    
    <div className='grid grid-cols-3 justify-between px-32 h-[50px]'>
    <div className='flex items-center'>
        MyDashboard
    </div>
    <div className='flex items-center justify-around font-bold'>
        <span>
         Home 
        </span>
        <span>
        Create Event
        </span>

    </div>
    <div className='flex justify-end items-center font-bold'>
        User Email
    </div>
</div>
  )
}

export default Navbar
