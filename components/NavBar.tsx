import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCirclePlus, faUser, faGear, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import '@styles/navbar.css'

export default function NavBar() {
  return (
    <nav className="bg-white text-red-800 px-2 py-2 md:h-screen md:w-24">
        <ul className="nav_list">
            <li><FontAwesomeIcon icon={faHouse}/></li>
            <li><FontAwesomeIcon icon={faCirclePlus}/></li>
            <li><FontAwesomeIcon icon={faUser}/></li>
            <li><FontAwesomeIcon icon={faGear}/></li>
            <li><FontAwesomeIcon icon={faMoon}/></li>
            <li><FontAwesomeIcon icon={faSun}/></li>
        </ul>
    </nav>
  )
}
