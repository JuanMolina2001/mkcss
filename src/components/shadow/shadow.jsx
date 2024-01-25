import React from 'react'

const Shadow = ({setShadow}) => {
  return (
    <>
     <input type="range" name="shadow" id="shadow" onChange={(e) => setShadow(e.target.value)} />
    </>
  )
}

export default Shadow