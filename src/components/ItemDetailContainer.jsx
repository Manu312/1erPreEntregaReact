import React from "react";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import {getDoc, doc, getFirestore} from 'firebase/firestore';
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    const {id} = useParams();  
    const [producto, setProducto] = useState([]);
    /*
    const obtenerData = new  Promise(async(resolve, reject) => {
      try{
        await new Promise(innerResolve => setTimeout(innerResolve, 100));
        //const response = await fetch('https://fakestoreapi.com/products');
        //const data = await response.json();
        const data = [
          { id: 1, title: 'Item 1', description: 'Descripción del Item 1', price: 10, pictureUrl: 'url1', category: 'cat1'},
          { id: 2, title: 'Item 2', description: 'Descripción del Item 2', price: 20, pictureUrl: 'url2', category: 'cat2'},
          // Agrega más items si es necesario
        ];
        resolve(data);
      }catch(error){
        reject(error);
      }
    });*/

    useEffect(() => {
        const db = getFirestore();

        const oneItem = doc(db, "zapatillas", id);

        getDoc(oneItem).then((snapshot) => {

          if(snapshot.exists()){
            const docs = snapshot.data();
            setProducto(docs);
          }else{
            console.log("No existe el producto solicitado");
          }
        });
    }, [producto]);
  /*
    return(
        <div>
            <h1>ItemDetailContainer</h1>
            {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          <ItemDetail Item={item}/>
        </ul>
      )}
            
        </div>
    )*/
    return(
      <div>
        <ItemDetail item={producto}/>
      </div>
    );
};

export default ItemDetailContainer;