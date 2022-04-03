
import './layout.css'

import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import Routes from '../Routes'
import Topnav from '../topnav/Topnav'
import Actions from '../../redux/Actions'


const Layout = () => {
  const themeReducer = useSelector(state => state.ThemeReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode')
    const colorClass = localStorage.getItem('colorMode')
    dispatch(Actions.setMode(themeClass))
    dispatch(Actions.setColor(colorClass))
  }, [dispatch])
  
  return (
    <Router>
        <div className={`
            layout 
            ${themeReducer.mode} 
            ${themeReducer.color}
          `}>
            <Sidebar />
            <div className="layout-content">
                <Topnav />
                <div className="layout-content-main">
                  <Routes />
                </div>
                <Footer />
            </div>
        </div>
    </Router>
  )
}

export default Layout