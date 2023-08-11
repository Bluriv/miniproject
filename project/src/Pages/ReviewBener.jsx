import React from 'react'
import Navbar from '../Components/Navbar'

const ReviewBener = () => {
  return (
    <div className='wrapperluar'>
        <div className='wrapperdalem'>
            <div className='text-white bg-gradient-to-r from-slate-500 to-slate-800'>
            <Navbar/>
            <hr></hr>
            <div className='text-white flex-col justify-center'>
            <h1><i><b> Did you enjoy the show? tell us what you think!</b></i></h1>
            <textarea className='border border-black h[200px] w-[500px]'/>
            <div><i><b> Don't forget to leave us a rating!</b></i></div>
            <div>
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div> 
    </div>
            </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default ReviewBener
