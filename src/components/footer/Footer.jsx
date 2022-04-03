import React from 'react'
import './footer.css'

const Footer = () => {
   const year = new Date().getFullYear()
  return (
    <div className='footer'>
        <small>&copy; Copyright {year}, Desgined by <a href="https://designs.algorithmi.org">Algorithmi</a></small>
    </div>
  )
}

export default Footer