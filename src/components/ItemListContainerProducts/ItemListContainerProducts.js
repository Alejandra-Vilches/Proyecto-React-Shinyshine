import React from "react";
import { useState, useEffect } from "react";
//import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainerProducts = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

   /* useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])*/

    useEffect(() =>{
        const coleccionProductos = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)):collection(db, "products")
        getDocs(coleccionProductos)
        .then((res) =>{
            const list = res.docs.map((product) =>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
            setProducts(list)
        })
        .catch((error) => console.log(error))
    },[categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList key={products.id} products={products}/>

        </div>
    )
}

export default ItemListContainerProducts


