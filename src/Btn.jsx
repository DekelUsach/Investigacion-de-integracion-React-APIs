import React from "react";
import './Btn.css'

export default function Btn({ buscarPokemon }) {
  return (
    <button onClick={buscarPokemon}>
      Buscar Pokémon
    </button>
  );
}
