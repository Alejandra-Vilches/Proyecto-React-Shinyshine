import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState, useContext } from 'react';
import {db} from '../../services/firebase'
import CartContext from '../../context/CartContext';

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, total, clear} = useContext(CartContext)

    const datosComprador = (e) => {
        setUser({
            ...user, 
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if(!user.name && !user.phone){
            alert('Llena los campos antes de continuar')
        }else{
            let order = {
                user,
                item:cart,
                total:total(),
                date:serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
            .then((res) =>{
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
        }
    }
    return(
        <div>
            {orderId !== ''
            ?<div>
                <h2>Tu compra ha sido exitosa</h2>
                <h5>Su id de compra es:{orderId}</h5>
            </div>
            :<div>
            <h2>Terminar compra</h2>
            <h5>Por favor llenar con sus datos</h5>
            <form onSubmit={finalizarCompra}>
                <div className='mb-3'>
                    <label className='form-label'> Nombre completo</label>
                    <input className='form-control' onChange={datosComprador} type='text' placeholer='Nombre y apellido' name='name' required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Número de teléfono</label>
                    <input className='form-control' onChange={datosComprador} type='number' placeholer='+56974365283' name='phone' required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Dirección de email</label>
                    <input className='form-control' onChange={datosComprador} type='email' placeholer='hola@gmail.com' name='mail' required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Repita su email</label>
                    <input className='form-control' type='email' placeholer='hola@gmail.com' name='mail' onChange={((e) => setValidateEmail(e.target.value))}/>
                </div>
                <button className='btn btn-secondary' type='submit' disabled={validateEmail !== user.mail}>Generar orden</button>
            </form>
        </div>}
        </div>
    )
}

export default Checkout