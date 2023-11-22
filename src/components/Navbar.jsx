import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
    <div className="container-fluid">
        {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" /> */}
        <Link to="/" className='logo text-decoration-none text-white'><h4>Claudina, delicias sin gluten</h4></Link>
        <ul className='menu d-flex justify-content-between'>
            <li><Link className='menu-link text-decoration-none text-white' to='/'>Inicio</Link></li>&nbsp
            <li><Link className='menu-link text-decoration-none text-white' to='/productos'>Productos</Link></li>&nbsp
            <li><Link className='menu-link text-decoration-none text-white' to='/productos/medias'>Medias</Link></li>&nbsp
            <li><Link className='menu-link text-decoration-none text-white' to='/productos/remeras'>Remeras</Link></li>&nbsp
            <li><Link className='menu-link text-decoration-none text-white' to='/productos/buzos'>Buzos</Link></li>&nbsp
            <li><Link className='menu-link text-decoration-none text-white' to='/productos/pantalones'>Pantalones</Link></li>&nbsp


            <li><Link className='menu-link text-decoration-none text-white' to='/contacto'>Contacto</Link></li>
        </ul>
        </div>


    </nav>
  )
}

export default Navbar