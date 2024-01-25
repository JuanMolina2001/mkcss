import React from 'react'
import './switch.css'

const Switch = ({setValue, currentValue, input }) => {
  return (
    <>
    <input type="checkbox" value={currentValue} name={input} id={input} onChange={()=>setValue(!currentValue)} className='switch' />
    </>
  )
}

export default Switch