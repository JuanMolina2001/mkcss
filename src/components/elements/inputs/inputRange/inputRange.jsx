import React from 'react'
import './inputRange.css'
const InputRange = ({ setValue, currentValue, min, max, step, input}) => {

  return (
    <div style={{ display: 'flex' }}>
      <input
        type="range"
        value={currentValue}
        onChange={(e) => setValue( parseFloat(e.target.value))}
        name={input}
        id={input}
        min={min}
        max={max}
        step={step}
      />
      <span style={{width:'1rem', textAlign: 'center'}}>
        {currentValue}
      </span>
    </div>
  )
}

export default InputRange;
