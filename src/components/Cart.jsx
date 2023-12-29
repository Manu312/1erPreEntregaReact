import React from 'react';
import useCarrito from '../hooks/useCarrito';
import { Button } from '@chakra-ui/react';

const Cart = () => {
    const {carrito, discardFromCarrito} = useCarrito();
    return (
        <div>
            <ul>
                Total Items: {carrito.length}
            </ul>
            <ul>
                {console.log(carrito)}
                {carrito.map((item, index) => (
                    <li key={index}>
                        <p>{item.nombre}</p>
                        <img src={item.imagen}/>
                        <Button onClick={() => discardFromCarrito(index)}>Eliminar del carrito</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;