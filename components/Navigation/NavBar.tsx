'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCirclePlus, faUser, faGear, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import '@styles/navbar.css'
import { useState } from 'react'
import Drawer from './Drawer';

export default function NavBar() {
    const [showDrawer, setShowDrawer] = useState(false)

    const drawerHandler = () => {
        setShowDrawer(prev => !prev)
    }

  return (
    <nav className="bg-white text-red-800 px-2 py-2 md:h-screen md:w-24">
        <ul className="nav_list">
            <li><FontAwesomeIcon icon={faHouse}/></li>
            <li onClick={drawerHandler}><FontAwesomeIcon icon={faCirclePlus}/></li>
            <li onClick={drawerHandler}><FontAwesomeIcon icon={faUser}/></li>
            <li onClick={drawerHandler}><FontAwesomeIcon icon={faGear}/></li>
            <li><FontAwesomeIcon icon={faMoon}/></li>
            <li><FontAwesomeIcon icon={faSun}/></li>
        </ul>
        {showDrawer && <Drawer>Working</Drawer>}
    </nav>
  )
}
