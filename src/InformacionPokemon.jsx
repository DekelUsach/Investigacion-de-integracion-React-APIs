import React from "react";
import './InformacionPokemon.css';

export default function InformacionPokemon({ pokemon, loading, error }) {
  return (
    <>
      {loading && <p className="loading">Cargando...</p>}
      {error && <p className="error">{error}</p>}

      {pokemon && (
        <div className="pokemon-info">
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
          <p>Tipos: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
        </div>
      )}
    </>
  );
}
