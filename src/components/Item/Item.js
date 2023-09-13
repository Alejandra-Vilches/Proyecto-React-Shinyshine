import React from "react";
import './Item.css';

import {Link} from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {

    return(

      
        <article className="CardItem">
            <header className="Header">
                <h4 className="ItemHeader">
                    {name}
                </h4>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
            <Link to={`/item/${id}`} className='btn btn-secondary'>Ver detalle</Link>
            </footer>
        </article>
      
    )
}

export default Item