import React from "react";
import { Badge, Box, Image } from "@chakra-ui/react";
const CardWidget = () => {
    return(
        <div>
            <Image src='src\assets\carrito.png' alt='Dan Abramov' />
            <Badge colorScheme="green">5</Badge>
        </div>
    )
}
export default CardWidget;