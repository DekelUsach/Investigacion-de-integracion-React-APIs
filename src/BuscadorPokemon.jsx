import React, { useState } from "react";
import axios from "axios";
import Btn from "./Btn";
import InformacionPokemon from "./InformacionPokemon";
import Input from "./Input";

export default function BuscadorPokemon() {
  const [nombre, setNombre] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buscarPokemon = () => {
    if (!nombre.trim()) return;

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
        setError("Pokémon no encontrado 😢");
        setLoading(false);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Buscador de Pokémon</h1>

      <Input nombre={nombre} setNombre={setNombre}/>
      <Btn buscarPokemon={buscarPokemon} />
      <InformacionPokemon pokemon={pokemon} loading={loading} error={error}/>
    
    
    </div>
  );
}
