import React from 'react'
import './header.css'
import Menubar from './Menubar'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='header'>
      <div className='menubar'>
      <Menubar/>
      </div>
     
      <Link to='/add-expence' className='add-expence'>Add New Expence</Link>
      
      <ul className='menu-items'>
        <li><Link to='/' className='link'>HOME</Link></li>
        <li><Link to='/expences-list' className='link'>VIEW EXPENCES</Link></li>
        <li><Link to='/summary' className='link'>SUMMARY</Link></li>
        <li>SIGN IN</li>
        <li>SING UP</li>
      </ul>

    </header>
  )
}

export default Header