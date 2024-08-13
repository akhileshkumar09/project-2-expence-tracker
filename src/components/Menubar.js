import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './menubar.css'

function Menubar() {
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(true)

    const handleClick = ()=>{
        setToggle((toggle)=>!toggle)
        setToggle1((toggle1)=>!toggle1)
    }
  return (
    <div className='menubar-wrapper'>
    <div className={!toggle1 ? 'menubar-div':'none'}>
       {toggle1 && (<button className='hamburger' onClick={handleClick}>
            <hr/><hr/><hr/>
        </button>)}

       {toggle && ( <div className='hamburger-menuItem' onClick={handleClick}>
            <span><Link to='/' className='link'>HOME</Link></span>
            <span><Link to='/expences-list' className='link'>VIEW EXPENCES</Link></span>
            <span><Link to='/summary' className='link'>SUMMARY</Link></span>
            <span>SIGN IN</span>
            <span>SING UP</span>
        </div>)}
    </div>
    </div>
  )
}

export default Menubar