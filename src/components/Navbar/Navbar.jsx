import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
const Navbar = (type) => {
    return (
        <div className='navbarContainer'>
            <div className="navLogo">
                <img src={logo} alt="" srcset="" width={150} />
            </div>
            <ul className="navLinks">
                <li><Link to="/" >HOME</Link></li>
                <li><Link to="/calls" >CALLS</Link></li>
                <li><Link to="/deals" >DEALS</Link></li>
                <li><Link to="/team" >TEAM</Link></li>
                <li><Link to="/activity" >ACTIVITY</Link></li>
                <li><Link to="/library" >LIBRARY</Link></li>
            </ul>
            <div className='navSearch'>
                <input type="text" placeholder='Search' className='navInput' />
                <img src="https://img.icons8.com/ios-filled/24/ffffff/search--v1.png" alt="search" />
            </div>
            <ul className='navLinks'>
                <li><Link to="/account">MY ACCOUNT</Link></li>
            </ul>
            <div className="navHelp">
                <img src="https://img.icons8.com/ios-glyphs/35/ffffff/help.png" alt='img' />
            </div>

        </div>
    )
}

export default Navbar