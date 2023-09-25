import React from 'react'
import Item from './Item'

function Box(props) {
  const items = props.todo.map(
    (singleData,index)=>{
      return <Item removeHandler={props.removeHandler} key={index} id={index} item={singleData.item} time={singleData.time}/>
    }
  )
  return (
    <div className='p-3 flex flex-col justify-around'>
        {items}
    </div>
  )
}

export default Box
