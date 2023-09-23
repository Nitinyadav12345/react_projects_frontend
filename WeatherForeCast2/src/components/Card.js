import React from 'react'

function Card(props) {
  return (
    <div className='flex flex-row items-center justify-center gap-4 mx-2 '>
       <div className="left flex flex-col px-3 py-6 gap-6">
         <p className='text-center sm:text-xl md:text-2xl lg:text-3xl font-semibold text-zinc-600'>{props.txt1}</p>
         <p className='text-center sm:text-xl md:text-2xl lg:text-3xl font-bold text-zinc-800'>{props.txt2}</p>
       </div>
       <div className='right px-3 py-6'>
          <img src={props.imga} alt="---"  className='w-16'/>
       </div>
    </div>
  )
}

export default Card
