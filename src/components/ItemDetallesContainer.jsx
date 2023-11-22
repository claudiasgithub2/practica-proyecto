import React, { useState, useEffect } from 'react';
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetalle from './ItemDetalle';
import { useParams } from 'react-router-dom';


const ItemDetallesContainer = () => {
    const [item, setItem]= useState(null)
    const id = useParams().id;
    console.log(id)

    useEffect(() => {
      pedirItemPorId(Number(id))
        .then((resp) => {
            setItem(resp);
        })
  

    }, [id])
    




  return (
    <div>
      {item && <ItemDetalle {...item} />}
    </div>
  )
}

export default ItemDetallesContainer