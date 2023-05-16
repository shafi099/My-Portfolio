import React from 'react'

const Skillcomp = (props) => {
  return (
    <div className='skillboxportion'>
    <span className='skillbox'>
      <img src={props.pic} alt={props.name} />
      {props.name}
    </span>
  </div>
  )
}

export default Skillcomp;