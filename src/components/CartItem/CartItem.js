import React, {useContext} from "react";
import {CartContext} from "../../context/CartContext";

const CartItem = ({ item }) => {
  const {deleteItem}= useContext(CartContext)

  return (
    <div>
      <img src={item.img} alt={item.name} with={'150rem'}/>
      <p>{item.name}</p>
      <p>${item.price}</p>
      <p>{item.quantity}</p>
      <p>Subtotal : ${item.quantity * item.price} </p>
      <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}> Borrar</button>
    </div>
  )


 
};

export default CartItem;