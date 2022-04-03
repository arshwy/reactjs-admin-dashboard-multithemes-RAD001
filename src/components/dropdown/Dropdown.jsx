import React, { useRef } from 'react'

import './dropdown.css'

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

const Dropdown = props => {
    // if event listener fired it fills the useRef() .current property with e.target
    const dropdown_menu = useRef(null); 
    const dropdown_btn_toggle = useRef(null);
    // add the event listener to the whole page and check if something pressed
    clickOutsideRef(dropdown_menu, dropdown_btn_toggle);
  return (
    <div className='_dropdown'>
        <button ref={dropdown_btn_toggle} className='_dropdown-toggle'>
            {
                props.icon && 
                    <i className={props.icon}></i>
            }
            {
                props.badge && 
                    <span className='_dropdown-toggle-badge'>{props.badge}</span>
            }
            {
                props.customToggle && props.customToggle()
            }
        </button>
        <div ref={dropdown_menu} className="_dropdown-content">
            {
                props.contentData && props.renderItems && 
                    props.contentData.map((item, index) => 
                        props.renderItems(item, index)
                    )
            }
            {
                props.renderFooter && (
                    <div className="_dropdown-footer">
                        {props.renderFooter()}
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Dropdown