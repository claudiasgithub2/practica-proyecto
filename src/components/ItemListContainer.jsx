import React, { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;
    console.log(categoria);
    
    useEffect(() => {
      pedirDatos()
      .then((res) => {
        if (categoria) {
          setProductos( res.filter((producto) => producto.categoria === categoria) )
          setTitulo(categoria)
        }
        else{
          setProductos(res);
          setTitulo("Productos")
        }
        
      })
    
    
    }, [categoria])
    



    return (
        <div className="my-5">
            <ItemList productos={productos} titulo={titulo} />
            
        </div>
    )
}

export default ItemListContainer;