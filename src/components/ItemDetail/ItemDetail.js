import React, {useState, useContext} from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom';
import { CartContext} from '../../context/CartContext';

const ItemDetail = ({id, name, img, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState('')
    const {addItem} = useContext(CartContext)
  

    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} productos al carrito`)
        const item = {id, name, img, description, price, stock}
        setQuantityAdded(quantity)
        addItem(item, quantity)
    }

    return(
        <div>
            <h3>Detalle de: {name}</h3>
            <img src={img} alt={name} className="ItemImg"/>
            <p>{description}</p>
            <p>${price}</p>
            {quantityAdded === '' ? <ItemCount initial={0} stock={stock} onAdd={onAdd}/>
            : <Link to='/cart' className="btn btn-dark"> Ir al carrito</Link>}
        </div> 
    )
}
   

export default ItemDetail