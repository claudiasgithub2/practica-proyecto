import React from 'react'
import Item from './Item'

const ItemList = ( {productos}) => {
    console.log(productos)
    return (
        <div>
          <h1 className="p-2 mx-auto"  style={{width: 200}}>Productos</h1>
    
          <div className="row mx-5">
            {productos.map((prod) => (
              <div className="col-4 mb-3" key={prod.id}>
                <Item producto={prod} />
              </div>
            ))}
          </div>
        </div>
      );
    };
export default ItemList