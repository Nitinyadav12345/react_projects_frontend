import React, { useRef } from 'react'
import {AiFillPlusCircle} from'react-icons/ai'
function Input(props) {
  const inputRef = useRef();
  return (
    <div className='p-3 flex justify-around'>
      <input type="text" 
      ref={inputRef}
      
      placeholder='enter the data'
      className='p-3 border-slate-400 border w-[90%] focus:outline-none rounded-lg
      '/>
      <div 
      onClick={()=>{
        props.handler(inputRef.current.value);
        inputRef.current.value = "";
      }}
      className='cursor-pointer w-[50px]  h-[50px] bg-[#e74c3c] rounded-[50%] flex justify-center items-center'>
        <AiFillPlusCircle size={30}/>
      </div>
    </div>
  )
}

export default Input
