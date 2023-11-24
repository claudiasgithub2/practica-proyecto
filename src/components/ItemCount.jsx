import React from 'react'
import { useState } from 'react'

function ItemCount( {cantidad, handleRestar, handleSumar, handleAgregar} ) {

  



  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        <div className="col">
          <button className="btn btn-primary " onClick={handleRestar}>
            -
          </button>
        </div>
        <div className="col">
          <p>{cantidad}</p>
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={handleSumar}>
            +
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-success bi bi-cart2 " onClick={handleAgregar}>
            Agregar al carrito
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCount