import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return(
        <div>
            {
            items.map((item) =>{
                return(
                    <div>
                      <Item item={item} />
                    </div>
                );
                })
            }
        </div>
    )
};

export default ItemList;