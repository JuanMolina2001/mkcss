import React from 'react'

const InputRange = ({ setValue, currentValue, min, max, step, input }) => {

  const handleDecrease = () => {
    setValue(currentValue > min ? currentValue - step : currentValue);
  }

  const handleIncrease = () => {
    setValue(currentValue <= max ? currentValue + step : currentValue);
  }

  return (
    <div style={{ maxWidth: '18rem' }}>
      <i className="bi bi-dash-circle" onClick={handleDecrease}></i>
      <input
        type="range"
        value={currentValue}
        onChange={(e) => setValue(parseInt(e.target.value))}
        name={input}
        id={input}
        min={min}
        max={max}
        step={step}
      />
      <i className="bi bi-plus-circle" onClick={handleIncrease}></i>
    </div>
  )
}

export default InputRange;
