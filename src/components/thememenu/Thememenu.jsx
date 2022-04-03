import React, {useRef, useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'

import Actions from '../../redux/Actions'
import './thememenu.css'

const modeSettings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light'
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background', /* assets/index.css */
        class: 'theme-mode-dark' /* this settings will alter from assets/theme.css */
    },
]

const colorSettings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color', /* assets/index.css */
        class: 'theme-color-blue' /* this settings will alter from assets/theme.css */
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red'
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange'
    },
]


const clickOutsideRef = (menu_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e)=>{
        // if user click toggle button
        if (toggle_ref.current && toggle_ref.current.contains(e.target)){
            menu_ref.current.classList.toggle('active')
        }
        // if user click outside the toggle button
        else {
            // if the click outside the menu
            if (menu_ref.current && !menu_ref.current.contains(e.target)) {
                menu_ref.current.classList.remove('active')
            }
        }
    })
}


const Thememenu = () => {

    const menuRef = useRef(null);
    const menuToggleRef = useRef(null);
    clickOutsideRef(menuRef, menuToggleRef)
    const openMenu = () => menuRef.current.classList.add('active')
    const closeMenu = () => menuRef.current.classList.remove('active')

    const dispatch = useDispatch()
    const [currentMode, setCurrentMode] = useState('light')
    const [currentColor, setCurrentColor] = useState('blue')
    const setMode = mode => {
        setCurrentMode(mode.id)
        localStorage.setItem('themeMode', mode.class)
        dispatch(Actions.setMode(mode.class))
        //window.location.reload()
    }
    const setColor = color => {
        setCurrentColor(color.id)
        localStorage.setItem('colorMode', color.class)
        dispatch(Actions.setColor(color.class))
        //window.location.reload()
    }
    useEffect(() => {
      const themeClass = modeSettings.find(e => (
        e.class === localStorage.getItem('themeMode', 'theme-mode-light')
      ))
      const colorClass = colorSettings.find(e => (
        e.class === localStorage.getItem('colorMode', 'theme-color-blue')
      ))
      if (themeClass !== undefined) {
          setCurrentMode(themeClass.id)
      }
      if (themeClass !== undefined) {
        setCurrentColor(colorClass.id)
      }
    }, [])
    

  return (
    <div>
        <button ref={menuToggleRef} className="_dropdown-toggle" onClick={()=>openMenu()}>
            <i className='bx bx-palette'></i>
        </button>
        <div ref={menuRef} className="theme-menu">
            <h4>Theme settings</h4>
            <button className="theme-menu-close" onClick={()=>closeMenu()}>
                <i className="bx bx-x"></i>
            </button>
            <div className="theme-menu-select">
                <span>Choose mode</span>
                <ul className="mode-list">
                    {
                        modeSettings.map((item, index) =>
                            <li key={index} onClick={()=>setMode(item)}>
                                <div className={`
                                        mode-list-color 
                                        ${item.background}
                                        ${item.id === currentMode && 'active'}
                                    `}>
                                    <i className="bx bx-check"></i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="theme-menu-select">
                <span>Choose color</span>
                <ul className="mode-list">
                    {
                        colorSettings.map((item, index) =>
                            <li key={index} onClick={()=>setColor(item)}>
                                <div className={`
                                        mode-list-color 
                                        ${item.background}
                                        ${item.id === currentColor && 'active'}
                                    `}>
                                    <i className="bx bx-check"></i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Thememenu