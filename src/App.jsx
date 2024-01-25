import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Canvas from './components/canvas/canvas'
import InputRange from './components/inputRange'
import Shadow from './components/shadow/shadow'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Switch from './components/switch/switch'
import ColorPicker from './components/colorPicker'
import Canvas3d from './components/canvas3d/canvas3d'


function App() {
  const [image, setImage] = useState(null)
  const [zoom, setZoom] = useState(1)
  const [isShadow, setIsShadow] = useState(false)
  const [shadow, setShadow] = useState(0)
  const [shadowInset, setShadowInset] = useState(false)
  const [coloShadow, setColorShadow] = useState('#000000')
  const shadowOptions = {
    isShadow: isShadow,
    shadow: shadow,
    inset: shadowInset,
    color: coloShadow
  }
  return (
    <>
    {false ? (
      <>
        <Canvas image={image} zoom={zoom} shadow={shadowOptions} />
        <input type="file" name="image" accept='image/*' id="image" onChange={(e) => setImage(e.target.files[0])} />
        <hr />
        <h4>Zoom</h4>
        <InputRange setValue={setZoom} currentValue={zoom} min={1} max={3} step={0.25} input={'zoom'} />
        <hr />
        <Switch setValue={setIsShadow} currentValue={isShadow} input={'isShadow'} />
        {isShadow ?
          <div style={{display: 'flex', flexDirection:'column', justifyContent:'center'}}> 
           <InputRange setValue={setShadow} currentValue={shadow} min={0} max={100} step={10} input={'shadow'} />
            <Switch setValue={setShadowInset} currentValue={shadowInset} input={'inset'} />
            <ColorPicker setValue={setColorShadow} input={'colorShadow'} currenValue={coloShadow}/>
            </div> 
            :
             null
        }
    </>):(
      <Canvas3d></Canvas3d>
    )

    }

    </>
  )
}

export default App
