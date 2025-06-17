import React, { useState } from 'react';
import axios from 'axios';

export default function BuscadorPokemon() {
  const [nombre, setNombre] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buscarPokemon = () => {
    if (!nombre.trim()) return; // evita búsquedas vacías

    setLoading(true);
    setError(null);
    setPokemon(null);

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`)
      .then((response) => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Pokémon no encontrado 😢');
        setLoading(false);
      });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Buscador de Pokémon</h1>

      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresá un nombre, ej: pikachu"
      />

      <button onClick={buscarPokemon}>Buscar</button>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {pokemon && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
          <p>Tipos: {pokemon.types.map((t) => t.type.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
}
