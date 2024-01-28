import { useEffect, useState } from 'react'
import Canvas from './components/canvas/canvas'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Options from './components/options/options'
import Devices from './components/devices/devices'
import Download from './components/download'



function App() {

  const [data, setData] = useState()
  return (
    <div style={{ display: 'flex', justifyContent:'space-around' , marginTop: '5rem'}}>
     <Devices setData={setData} data={data}/>
      {data? <Canvas data={data} />: null}
      <Options setData={setData} data={data}  />
    </div>
  )
}

export default App
