import React from "react";
import {useState} from "react";
const FiltradoCanciones = ({canciones}) =>{
    const [filtro, setFiltro] = useState("");

   // Filtrar canciones por artista
  const cancionesFiltradas = 
    filtro.trim() === ""
         ? []
            : canciones.filter((cancion) =>
            cancion.track_artist.toLowerCase().includes(filtro.toLowerCase())
        );
 

  return (
    <div>
      <h2>Filtrar por Artista</h2>
      <input
        type="text"
        placeholder="Escribe el nombre del artista..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {cancionesFiltradas.map((cancion) => (
          <li key={cancion.track_id}>{cancion.track_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FiltradoCanciones;