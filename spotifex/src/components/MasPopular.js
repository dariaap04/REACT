import React from "react";

const MasPopular = ({ canciones }) => {
  if (canciones.length === 0) {
    return <p>No hay canciones disponibles.</p>;
  }

  // Encontrar la canción más popular
  const cancionMasPopular = canciones.reduce((max, cancion) =>
    cancion.track_popularity > max.track_popularity ? cancion : max
  );

  return (
    <div>
      <h2>Canción Más Popular</h2>
      <p>
        <strong>{cancionMasPopular.track_name}</strong> -{" "}
        {cancionMasPopular.track_artist}
      </p>
      <p>Popularidad: {cancionMasPopular.track_popularity}</p>
    </div>
  );
};

export default MasPopular;
