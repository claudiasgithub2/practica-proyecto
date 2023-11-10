import React, { useState, useEffect } from 'react';
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetalle from './ItemDetalle';


const ItemDetallesContainer = ( {itemId} ) => {
    const [item, setItem]= useState(null)

    useEffect(() => {
      pedirItemPorId(itemId)
        .then((resp) => {
            setItem(resp);
        })
  

    }, [itemId])
    




  return (
    <div>
      {item && <ItemDetalle {...item} />}
    </div>
  )
}

export default ItemDetallesContainer