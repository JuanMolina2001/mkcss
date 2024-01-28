import React from 'react'
import './switch.css'

const Switch = ({setValue, currentValue, input, values }) => {
  return (
    
    <input type="checkbox" value={currentValue} name={input} id={input} onChange={()=>setValue(...values,!currentValue)} className='switch' />
    
  )
}

export default Switch