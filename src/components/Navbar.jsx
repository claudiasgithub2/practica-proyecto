import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
    <div className="container-fluid">
        {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" /> */}
        <Link to="/" className='logo text-decoration-none text-white'><h4>Claudina</h4></Link>
        <ul className='nav justify-content-end'>
            <li className='nav-item'><Link className='nav-link text-decoration-none text-white' to='/'>Inicio</Link></li>
            <li className='nav-item'><Link className='nav-link text-decoration-none text-white' to='/productos'>Productos</Link></li>
            <li className='nav-item'><Link className='nav-link text-decoration-none text-white' to='/productos/medias'>Medias</Link></li>
            <li className='nav-item'><Link className='nav-link text-decoration-none text-white' to='/productos/remeras'>Remeras</Link></li>
            <li className='nav-item'><Link className='nav-link text-decoration-none text-white' to='/productos/buzos'>Buzos</Link></li>
            <li className='nav-item'><Link className='nav-link text-decoration-none text-white' to='/productos/pantalones'>Pantalones</Link></li>

            <li className='nav-item'><Link className='nav-link text-decoration-none text-white' to='/nosotros'>Nosotros</Link></li>

            {/* <li><Link className='nav-link text-decoration-none text-white' to='/contacto'>Contacto</Link></li> */}
        </ul>
        </div>


    </nav>
  )
}

export default Navbar