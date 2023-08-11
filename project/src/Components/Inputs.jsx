import React from 'react'
import { useState } from 'react'


const Inputs = () => {
  const [inputText, setInputText] = useState("")



  return (
    <div>
      <textarea value={inputText} onChange={(e) => {setInputText(e.target.value)}} className= ' border border-slate-950  h-[200px] w-[500px] '> What did you think about the event? </textarea>
      <div>{inputText}</div>
    </div>
  )
}

export default Inputs

//<input type="text" value={inputText.nama} onChange={(e) => {setInputText(e.target.value)}}/>

