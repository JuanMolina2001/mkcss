import { useEffect, useState } from 'react'
import './canvas.css'

 const Canvas = ({ image, zoom, shadow }) => {
  const zoomStr = zoom.toString()
  const boxShadow = shadow.isShadow ? `${shadow.inset ? 'inset' : ''} 2px 2px 2px 1px ${shadow.color}` : 'none'
  useEffect(() => {
    if (image) {
      setSrc(URL.createObjectURL(image))
    }
  }, [image])
  const [src, setSrc] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxuHwaWDGB_nhFaMIInCiBbBfGgKbL2hKon3Wavxj1g&s')
  return (<>
    <div className='container' style={{scale: zoomStr, boxShadow:boxShadow }}>
      <img className='image' src={src} alt="" />
      <img src="/public/phone.png" className='phone' alt="" />
    </div>
  </>
  )
}
export default Canvas