import React from "react";

const CatalogoLibros = ({libros})=>{
    return (
        <>
            <h2>Listado de Libros</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Título</th>
                        <th>Subtítulos</th>
                        <th>Autor</th>
                        <th>Editorial</th>
                        <th>Páginas</th>
                        <th>Sipnosis</th>
                        <th>Páginas</th>
                    </tr>
                   
                </thead>
                <tbody>
                    {libros.map((libro)=>{
                        return(
                            <tr key={libro.isbn}>
                                <td>{libro.isbn}</td>
                                <td>{libro.title}</td>
                                <td>{libro.subtitle}</td>
                                <td>{libro.author}</td>
                                <td>{libro.publisher}</td>
                                <td>{libro.pages}</td>
                                <td>{libro.description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default CatalogoLibros; 