import React from 'react'
import html2canvas from 'html2canvas'
const Download = () => {
  const download = () => {
    const canvas = document.querySelector('.container')
    html2canvas(canvas, {backgroundColor: 'none'}).then(canvas => {
      const link = document.createElement('a')
      link.download = 'image.png'
      link.href = canvas.toDataURL()
      link.click()
    })
  }
  return (
    <button onClick={()=>download()}>
      Descargar
    </button>
  )
}

export default Download