import React, { useState } from 'react'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {AiFillSetting,AiFillQuestionCircle,AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Navbar() {
    const [nav,setNav] = useState(false)
  return (
    <>
    {/* NavbAR */}
    <div className='w-full h-[50px] text-black bg-blue-500 flex  justify-between'>
            <div onClick={()=>setNav(!nav)} className='cursor-pointer flex items-center  hover:bg-blue-900'>
                <AiOutlineMenu size={30}/>
            </div>
            
            <div className='flex items-center'>
            <span className='text-xl font-extrabold italic mr-10 md:text-2xl'>MY WEATHER APPLICATION</span>
            </div>
    </div>

    {
            nav ? <div className=' bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ""
    }

    {/* sidebar */}
    <div className={nav? 'fixed top-0 left-0 w-[50px] h-screen bg-blue-500 duration-300 z-10 ':'fixed top-0 left-[-100%] w-[50px] h-screen bg-blue-500 z-10 duration-300'}>
      <nav>
          <ul className='flex flex-col px-2 text-black'>
              <li className=' py-2 text-xl  hover:bg-blue-900'><AiOutlineClose size={30} className=" cursor-pointer" onClick={()=>setNav(!nav)}/> </li>  
              <li className=' py-2 text-xl  hover:bg-blue-900'><Link to="/"><TiWeatherPartlySunny size={35}/></Link></li>
              <li className=' py-2 text-xl  hover:bg-blue-900'><Link to="/setting"><AiFillSetting size={35} /></Link></li> 
              <li className=' py-2 text-xl  hover:bg-blue-900'><Link to="/about"><AiFillQuestionCircle size={35} /></Link></li> 
          </ul>
      </nav>
    </div>
  </>
  )   
}
export default Navbar
