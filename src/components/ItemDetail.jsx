import React, { useEffect,useState } from "react";
import { Button,Flex } from "@chakra-ui/react";
import useCounter from '../hooks/useCounter.js';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemDetail = ({productos}) => {
    const {id} = useParams();
    const {count, increment,decrement} = useCounter(0,1);
    const [item, setItem] = useState(null);

    const mostrarInfo = async () => {
        await new Promise(innerResolve => setTimeout(innerResolve, 100));
      };
    
      useEffect(() => {
        mostrarInfo()
          .then(() => {
            setItem(productos.find((p) => p.id == id));
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);
    return(
        <div>
        {item ? (
          <div>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.descripcion}</p>
            <p>{item.price}</p>
            <Flex>
              <Button onClick={increment}>+</Button>
              <p>{count}</p>
              <Button onClick={decrement}>-</Button>
              <Button>Agregar al carrito</Button>
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