import React from 'react';
import {useState, useEffect} from "react";
import ListadoCanciones from './ListadoCanciones';
import FiltradoCanciones from './FiltradoCanciones';
import MasPopular from './MasPopular';
const SpotiMain = () =>{
    const [canciones, setCanciones] = useState ([]); // Estado para almacenar las canciones

    const fetchCanciones = async () =>{
        try{
            const ruta = await fetch("./json/Spotify.json");
            const data = await ruta.json();
            setCanciones(data);
        }catch(error){
            console.error('Error al obtener canciones:', error);
        }
        
    };
    useEffect(()=>{
        fetchCanciones();
    }, []); // Se ejecuta solo una vez al montar el componente
    return(
        <>
            <h1>Bienvenido a SpotifEx - Biblioteca Musical</h1>
            <p>Total de canciones: {canciones.length}</p>
            <FiltradoCanciones canciones={canciones} /> {/* Pasamos las canciones al componente FiltradoCanciones */}
            <MasPopular canciones={canciones} /> {/* Pasamos las canciones al componente MasPopular */}
            <ListadoCanciones canciones={canciones} />  {/* Pasamos las canciones al componente ListadoCanciones */}
            
            
        </>
    );
}

export default SpotiMain;