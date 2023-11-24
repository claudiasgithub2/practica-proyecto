import React, { useState } from 'react'
import ItemCount from './ItemCount'

const ItemDetalle = (item) => {


  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)

  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const handleAgregar = () => {
    console.log ({...item, cantidad});
  }




  return (
    <div className="card mb-6 shadow p-3 bg-body-tertiary rounded d-flex justify-content-center" style={{ maxWidth: '600px', margin: '0 auto', marginTop: '10vh' }}>
      <div className="row g-0 d-flex justify-content-center align-items-center">
        <div className="col-md-4 d-flex align-items-center">
          <img src={item.imagen} alt={item.titulo} className="img-fluid rounded" style={{ maxHeight: '100%', width: 'auto' }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{item.titulo}</h4>
            <p className="card-text">Precio: ${item.precio}</p>
            <p className="card-text">Categoría: {item.categoria}</p>
            <p className="card-text">{item.descripcion}</p>
            <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={handleAgregar} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetalle