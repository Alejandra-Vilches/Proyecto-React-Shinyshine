import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clear, total} = useContext(CartContext)

    return(
        <div>
            {cart.length
            ? <div>
                {cart.map((item) => <CartItem key={item.id} item={item}/>)}
                <h3 className="m-3">Total a pagar: ${total()}</h3>
                <div>
                    <button className="btn btn-danger m-2" onClick={clear}>Vaciar carrito</button>
                    <Link className="btn btn-dark m-2">Terminar compra</Link>
                </div>
            </div>
            : <div>
                <h3 className="m-5">Tu carrito está vacio</h3>
                <Link to = '/' className= 'btn btn-dark'>Ir a comprar</Link>
            </div>}
        </div>
    )
}

export default Cart;