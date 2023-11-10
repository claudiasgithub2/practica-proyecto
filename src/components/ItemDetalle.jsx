import React from 'react'

const ItemDetalle = (item) => {
  return (
    <div className="card mb-6 shadow p-3 bg-body-tertiary rounded" style={{ maxWidth: '18 rem' }}>
      <div class="row g-0">
      <div class="col-md-4 d-flex align-items-center">
      <img src={item.imagen} alt={item.titulo} className="img-fluid rounded" style={{ maxHeight: '100%', width: 'auto' }} />
      </div>
      <div class="col-md-8">
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