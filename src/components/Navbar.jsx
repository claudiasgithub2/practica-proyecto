import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
        {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" /> */}
        <a href="#" className='logo text-decoration-none text-white'><h4>Claudina, delicias sin gluten</h4></a>
        <ul className='menu d-flex justify-content-between'>
            <li><a className='menu-link text-decoration-none text-white' href='#'>Inicio</a></li>&nbsp
            <li><a className='menu-link text-decoration-none text-white' href='#'>Nosotros</a></li>&nbsp
            <li><a className='menu-link text-decoration-none text-white' href='#'>Producto</a></li>&nbsp
            <li><a className='menu-link text-decoration-none text-white' href='#'>Contacto</a></li>
        </ul>
        </div>


    </nav>
  )
}

export default Navbar