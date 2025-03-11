import React from "react";

const CatalogoLibros = ({ libros = [] }) => {
  return (
    <>
      <h2>Listado de Libros</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Título</th>
            <th>Subtítulo</th>
            <th>Autor</th>
            <th>Editorial</th>
            <th>Páginas</th>
            <th>Sinopsis</th>
          </tr>
        </thead>
        <tbody>
          {libros.length > 0 ? (
            libros.map((libro) => (
              <tr key={libro.isbn}>
                <td>{libro.isbn || "N/A"}</td>
                <td>{libro.title || "Título no disponible"}</td>
                <td>{libro.subtitle || "N/A"}</td>
                <td>{libro.author || "Desconocido"}</td>
                <td>{libro.publisher || "Editorial desconocida"}</td>
                <td>{libro.pages ? libro.pages : "N/A"}</td>
                <td>{libro.description || "Sin descripción"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No hay libros disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default CatalogoLibros;
