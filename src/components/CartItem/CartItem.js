import React, {useContext} from "react";
import {CartContext} from "../../context/CartContext";

const CartItem = ({ item }) => {
  const {deleteItem}= useContext(CartContext)

  return (
    <div className="d-flex flex-row justify-content-center m-5">
      <img src={item.img} alt={item.name} width={'150rem'}/>
      <p className="m-5">{item.name}</p>
      <p className="m-5">${item.price}</p>
      <p className="m-5">{item.quantity}</p>
      <p className="m-5">Subtotal : ${item.quantity * item.price} </p>
      <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}> Borrar</button>
    </div>
  )


 
};

export default CartItem;
