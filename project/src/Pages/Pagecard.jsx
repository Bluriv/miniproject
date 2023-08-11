import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';

const Card = ({ title, content, imageUrl }) => {
    const [events, setEvents] = useState ([])
    const FetchData = async() => {
        try{
        const ress= await axios.get("http://localhost:3004/events")
        setEvents(ress.data);
        } catch (error){
            console.log("Error fetching data:", error)
        }
    }
    useEffect((e) => {
        FetchData();
        }, []);

        


  return (
    <div>
        {events.map((e) => {
            return(
              <div>
<div className='flex flex-col items-center justify-center border border-solid'>
        <div className='bg-amber-500 border border-solid border-black rounded-md'>
        <h1> Event : {e.nama_event}</h1>
        <h1> Category: {e.kategori_event}</h1>
        <h1> Price : {e.biaya} </h1>
        </div>
    </div>
    </div>
            )

        })}

    
    <div className="flex-row justify-center bg-gradient-to-tr from-green-400 to-blue-400 border border-slate-800 ">
      {imageUrl && <img src={imageUrl} alt={title} className="mb-4 rounded-lg" />}
      <h2 className="text-xl font-semibold mb-2">{title}Pertunjukan wayang</h2>
      <p className="text-gray-600">{content} Event</p>
    </div>
    </div>
  );
};

export default Card;