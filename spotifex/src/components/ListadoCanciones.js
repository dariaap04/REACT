import React from 'react';

const ListadoCanciones = ({canciones})=>{
    /*pasar de milisegundos a segundos*/
    const convertirSegundos = (ms) => {
        return Math.floor(ms/1000);
    }
    return(
        <>
            <h2>Listado de Canciones</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre Canción</th>
                        <th>Artista</th>
                        <th>Popularidad</th>
                        <th>Nombre del Albúm</th>
                        <th>Fecha Albúm</th>
                        <th>Duracion (s)</th>
                    </tr>
                </thead>
                <tbody>
                    {canciones.map((cancion)=>{
                        return(
                            <tr key={cancion.track_id}>
                                <td>{cancion.track_id}</td>
                                <td>{cancion.track_name}</td>
                                <td>{cancion.track_artist}</td>
                                <td>{cancion.track_popularity}</td>
                                <td>{cancion.track_album_name}</td>
                                <td>{cancion.track_album_release_date}</td>
                                <th>{convertirSegundos(cancion.duration_ms)}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ListadoCanciones;
