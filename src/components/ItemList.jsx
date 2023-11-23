import React from 'react'
import Item from './Item'
import { toCapital } from '../helpers/toCapital';

const ItemList = ( {productos, titulo}) => {
    console.log(productos)
    return (
        <div>
          <h1 className="p-2 mx-5"  style={{width: 200}}>{ toCapital(titulo)}</h1>
    
          <div className="row mx-1 mx-sm-3 mx-md-5">
            {productos.map((prod) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3" key={prod.id}>
                <Item producto={prod} />
              </div>
            ))}
          </div>
        </div>
      );
    };
export default ItemList