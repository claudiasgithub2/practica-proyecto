import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {
  return (
    <div className="card mb-4">
      <img src={producto.imagen} alt={producto.titulo} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{producto.titulo}</h4>
        <p className="card-text">Precio: ${producto.precio}</p>
        <p className="card-text">Categoría: {producto.categoria}</p>
        <p className="card-text">{producto.descripcion}</p>
        <Link className="btn btn-primary" to={`/item/${producto.id}`}>Ver más</Link>
        



        
      </div>
    </div>
  )
}

export default Item