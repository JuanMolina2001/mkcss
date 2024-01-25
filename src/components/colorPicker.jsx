import React from 'react'

const ColorPicker = ({ setValue, input, currenValue }) => {
    return (
        <div>
            <input type="color" value={currenValue} name={input} id={input} onChange={(e) => {
                setValue(e.target.value)
            }
            } />
        </div>
    )
}

export default ColorPicker