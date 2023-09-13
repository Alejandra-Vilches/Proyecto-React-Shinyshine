import React, { useContext } from 'react';
import cart from './assets/cart-shopping-solid.svg';
import { CartContext } from '../../context/CartContext';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)

    return(

        <div className=''>
            <img className='CartImg m-2' src={cart} alt="cart-widget" style={{width: '42px', paddingTop: '20px'}}/>
            {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}

export default CartWidget;