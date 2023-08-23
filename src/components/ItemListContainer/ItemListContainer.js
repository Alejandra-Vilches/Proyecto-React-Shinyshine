import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {
    return(
        <div className="App">
            <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
        </div>
    );
}

export default ItemListContainer