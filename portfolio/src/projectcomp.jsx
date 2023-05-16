import React from 'react'
// import a from 'react-anchor-link-smooth-scroll';

const Projectcomp = (props) => {
  return (
    <div className='projectbox'>
    <span className='projectimg'>
  <img src={props.pic} alt='cointracker_image'/>
    </span>
    <span className='projectname'>{props.name}</span>
    <span className='projecttext'>{props.text}</span>
    <span className='projectlinkprotion'>
      <a href={props.view} className='no-underline'><span>View</span></a>
      <a href={props.code} className='no-underline'><span>Code</span></a>
    </span>
  </div>  

  )
}

export default Projectcomp