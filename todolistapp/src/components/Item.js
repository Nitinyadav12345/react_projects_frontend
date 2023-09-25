import React, { useState } from 'react'
import {MdOutlineDeleteOutline} from "react-icons/md"
function Item(props) {
    const [done,setDone] = useState(false);
  return (
    <div onClick={()=>{
        setDone(!done);
}} className={` select-none w-full border-b p-3 flex justify-between items-center ${done === true ?"bg-red-300 ":"bg-green-300"}`}>
      <div className=' text-[14px] text-slate-900'>
        <span className='pr-2 text-[10px]'>{props.time}</span>
        <span className={` cursor-pointer `}>{props.item}</span>
      </div>
      <div className='cursor-pointer w-[30px]  h-[30px] bg-[#e74c3c] rounded-[50%] flex justify-center items-center' onClick={()=>{
        props.removeHandler(props.id)
      }}>
        <MdOutlineDeleteOutline/>
      </div>
    </div>
  )
}

export default Item
