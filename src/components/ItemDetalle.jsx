import React from 'react'

const ItemDetalle = (item) => {
  return (
    <div className="card mb-6 shadow p-3 bg-body-tertiary rounded d-flex justify-content-center" style={{ maxWidth: '600px',  margin: '0 auto', marginTop: '10vh' }}>
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
    </div>
    </div>
    </div>
    </div>
  )
}

export default ItemDetalle