import React from "react";
import {useState, useEffect} from 'react';
//import { getProductById } from "../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import {db} from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {id} = useParams() 

   /* useEffect(() => {
        getProductById(id)
         .then(response => {
            setProduct(response)
         })
         .catch(error => {
            console.error(error)
         })
    }, [id])*/

    useEffect(() =>{
        const collectionProd = collection(db, 'products')
        const referenciaAlDoc = doc(collectionProd, id)
        getDoc(referenciaAlDoc)
        .then((res) => setProduct({id:res.id, ...res.data()}))
        .catch((error) => console.log(error))
    },[])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
 
}

export default ItemDetailContainer;