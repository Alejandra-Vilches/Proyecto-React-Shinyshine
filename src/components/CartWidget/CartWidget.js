import React from 'react';
import cart from './assets/cart-shopping-solid.svg';

const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-widget" style={{width: '42px', paddingTop: '20px'}}/>
            0
        </div>
    )
}

export default CartWidget