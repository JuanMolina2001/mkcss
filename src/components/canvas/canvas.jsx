
import { useEffect, useState } from 'react'
import './canvas.css'
//  const src = image ? image : 'placeholder'
// const css = `{
//   scale: ${scale};
//   translate: ${move.x}px ${move.y}px;
//   rotate: ${rotate}deg;
//   box-shadow: ${boxShadow}; 
// }`
// 
// 
// 
const Canvas = ({ data }) => {
  const { image, zoom, shadow, move, rotate } = data.options;
  console.log(shadow)
  const scale = zoom.toString()
  const device = data.device ? data.device.image : 'android';
  const classDevice = data.device ? data.device.className : 'phone';
  const src = `/public/images/${device}.png`;
  const boxShadow = shadow.isShadow ? `${shadow.x}px ${shadow.y}px ${shadow.blur}px 0px ${shadow.color}` :'none';
  // const backgroundColor = shadow.isShadow ? shadow.color : 'transparent';

  return (
    <div className='container'>
      <img src={src} style={{ boxShadow: boxShadow, scale: scale, rotate: `${rotate}deg`, translate: `${move.x}px ${move.y}px`}} className={`${classDevice} ${device}`} alt="" />
    </div>
  );
}

export default Canvas;