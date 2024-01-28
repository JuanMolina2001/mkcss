import React from 'react'
import InputRange from './inputRange/inputRange'
import hexToRgb from '../utils/hexToRgb'
const ColorPicker = ({ setValue, input, currenValue, values }) => {
    const [opacity, setOpacity] = useState(1)
    return (
        <div>
            <input type="color" value={currenValue} name={input} id={input} onChange={(e) => {
                setValue( ...values,hexToRgb(e.target.value, opacity))
            }
            } />
            <InputRange  setValue={setOpacity} currentValue={opacity} min={0} max={1} step={0.1} input={`opacity${input}`} />
        </div>
    )
}

export default ColorPicker