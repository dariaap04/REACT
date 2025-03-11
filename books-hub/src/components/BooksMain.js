import React from 'react';
import { useEffect, useState } from 'react';
import CatalogoLibros from './CatalogoLibros';

const BooksMain = () =>{
    const [books, setBooks] = useState([]); 
    const fetchBooks = async () =>{
        try{
            const ruta = await fetch("/json/BooksHub.json");
            const data = await ruta.json();
            setBooks(data);
        }catch(error){
            console.error("Error al cargar los libros: ", error);
        }
    };
    useEffect(()=>{
        fetchBooks();
    }, []);
    return(
        <>
            <h3>Bienvenido a la Biblioteca de Libros</h3>
            <CatalogoLibros books={books} />  
        </>
    );
};

export default BooksMain;