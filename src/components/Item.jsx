import { Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import React from "react";

const Item = ({ item }) => {
    return (
        <div>
            <p>{item.title}</p>
            <img src={item.pictureUrl}/>
            <Link to={`/item/${item.id}`}>
                <Button>Ver Detalle</Button>
            </Link>
        </div>
    );
};

export default Item;