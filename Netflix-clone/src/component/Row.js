import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Movie from './Movie';
import {MdChevronLeft,MdChevronRight} from "react-icons/md"

function Row({rowid ,title , fetchUrl}) {
    const [movies , setMovies] = useState([]);


    useEffect(()=>{
        axios.get(fetchUrl).then((res) => {
            setMovies(res.data.results);
          });
    },[fetchUrl])

    const slideleft =()=>{
        var slider = document.getElementById('slider' + rowid)
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    
    const slideright =()=>{
        var slider = document.getElementById('slider' + rowid)
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    
  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>
        {title}
      </h2>
      <div className=' relative flex items-center group'>
        <MdChevronLeft onClick={slideleft} className=' bg-white left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
           <div id={'slider'+rowid} className=' w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative'>
              {
                movies.map((item,id)=>(
                   <Movie key={id} item={item} />
                ))
              }
           </div>
           <MdChevronRight onClick={slideright} className=' bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
      </div>
    </>
  )
}

export default Row
