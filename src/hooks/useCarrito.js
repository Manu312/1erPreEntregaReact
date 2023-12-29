import { useState, useEffect } from 'react';

const useCarrito = () => {
    const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const [carrito, setCarrito] = useState(storedCarrito);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const addToCarrito = (item) => {
        setCarrito((prevCarrito) => [...prevCarrito, item]);
    };
    
    const discardFromCarrito = (itemIndex) => {
        setCarrito((prevCarrito) => {
            const newCarrito = [...prevCarrito];
            newCarrito.splice(itemIndex, 1);
            return newCarrito;
        });
    };

    return { carrito, addToCarrito, discardFromCarrito };
};

export default useCarrito;