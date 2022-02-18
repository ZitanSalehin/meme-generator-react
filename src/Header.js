import React from 'react'
import img from './images/meme1.png'

function Header() {
  return (
    <div className="header">

      <img src={img} alt='' className='header--image'/>
        <h1 className='header--title'>hello form header</h1>
        <h1 className='header--project'>Header Component</h1>
    </div>
  )
}

export default Header