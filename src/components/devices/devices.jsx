import {useEffect} from 'react'

const Devices = ({setData, data}) => {

  const setDevice = (image ,className) => {
    setData({ ...data, device: {image, className} })
  }
  return (
    <section>
    <ul>
      <li>
        <button onClick={() => { setDevice('macBwLight','browser') }}>
          navegador macOS (oscuro)
        </button>
      </li>
      <li>
        <button onClick={() => { setDevice('macBwDark','browser') }}>
          navegador macOS (claro)
        </button>
      </li>
      <li>
        <button onClick={() => { setDevice('winBwLight','browser') }}>
          navegador Windows (claro)
        </button>
      </li>
      <li>
        <button onClick={() => { setDevice('winBwDark','browser') }}>
          navegador Windows (oscuro)
        </button>
      </li>
      <li>
        <button onClick={() => { setDevice('iphone', 'phone') }}>
          iPhone
        </button>
      </li>
      <li>
        <button onClick={() => { setDevice('android', 'phone') }}>
          android
        </button>
      </li>
    </ul>
  </section>
  )
}

export default Devices