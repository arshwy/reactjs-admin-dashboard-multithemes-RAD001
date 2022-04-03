import React from 'react'

import './statuscard.css'
import '../../assets/css/grid.css'

const Statuscard = (props) => {
  return (
    <div className="status-card">
        <div className="status-card-icon">
            <i className={props.icon}></i>
        </div>
        <div className="status-card-info">
            <h4>{props.count}</h4>
            <span>{props.title}</span>
        </div>
    </div>
  )
}

export default Statuscard