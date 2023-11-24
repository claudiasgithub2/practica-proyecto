import React from 'react'
import { useState } from 'react'

function ItemCount() {

    const [cantidad, setCantidad] = useState(1);



  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        <div className="col">
          <button className="btn btn-primary">
            -
          </button>
        </div>
        <div className="col">
          <p>{cantidad}</p>
        </div>
        <div className="col">
          <button className="btn btn-primary">
            +
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-success">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCount