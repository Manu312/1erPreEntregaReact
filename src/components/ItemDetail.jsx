import React, { useEffect,useState } from "react";
import { Button,Flex } from "@chakra-ui/react";
import useCounter from '../hooks/useCounter.js';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useCarrito from '../hooks/useCarrito.js'

const ItemDetail = ({item}) => {
    const {count, increment,decrement} = useCounter(0,1);
    const {carrito, addToCarrito} = useCarrito();
    return(
        <div>
        {item ? (
          <div>
            <Flex>
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title} />
              <p>{item.descripcion}</p>
              <p>{item.price}</p>
              <Button onClick={increment}>+</Button>
              <p>{count}</p>
              <Button onClick={decrement}>-</Button>
              <Button onClick={() =>addToCarrito(item)}>Agregar al carrito</Button>
            </Flex>
            <Button>
              <Link to="/">Volver</Link>
            </Button>
          </div>
        ) : (
          <p>Cargando detalles del producto...</p>
        )}
      </div>
    );
};

export default ItemDetail;