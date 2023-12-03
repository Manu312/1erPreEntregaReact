import { Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import React from "react";

const Item = ({ item }) => {
    return (
        <div>
            <p>{item.nombre}</p>
            <img src={item.imagen}/>
            <Link to={`/item/${item.id}`}>
                <Button>Ver Detalle</Button>
            </Link>
        </div>
    );
};

export default Item;