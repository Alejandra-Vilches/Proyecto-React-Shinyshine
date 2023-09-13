import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity >1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls d-flex flex-row justify-content-center'>
                <button className="btn btn-secondary m-2" onClick={decrement}>-</button>
                <h4 className='Number m-2'>{quantity}</h4>
                <button className="btn btn-secondary m-2" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn btn-secondary m-2" onClick={() => {
            if (stock) {
              onAdd(quantity);
             // window.alert("Producto agregado al carrito");
            }
          }} disabled ={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;