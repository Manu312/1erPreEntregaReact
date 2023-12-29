import React from "react";
import { useEffect, useState } from 'react'
import { Button,Flex,useToast } from '@chakra-ui/react';
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {useParams} from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

    const {category} = useParams();
    const toast = useToast()

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const  addToCart = () => {
        toast({
            title: "Producto agregado al carrito",
            description: `El producto se agrego correctamente, cantidad: ${count}`,
            status: "success",
            duration: 1500,
            isClosable: true,
        })
    };

    /*const obtenerData = new  Promise(async(resolve, reject) => {
      try{
        await new Promise(innerResolve => setTimeout(innerResolve, 2000));
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
      const itemsCollection = collection(db,"Indumentaria");
      console.log(category)
      new  Promise(async(resolve, reject) => {
        if(category!==undefined){
          await new Promise(innerResolve => setTimeout(innerResolve, 2000));
          itemsCollection = collection(db,category);
        }
      });
      console.log(itemsCollection)
      getDocs(itemsCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => {
          let documento = {
            ...doc.data(), id: doc.id
          }
          return documento;
        });
        setProductos(docs);
        setLoading(false);
      });
    }, [productos]);
    return(
        <div>
            <h1>{greeting}</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          <ItemList items={productos}/>
        </ul>
      )}
        </div>
    )
}
export default ItemListContainer;