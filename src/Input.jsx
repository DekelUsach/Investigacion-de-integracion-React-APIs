import React from 'react'
import './Input.css'

export default function Input({nombre, setNombre}) {
  return (
   <>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresá un nombre, ej: pikachu"
      />

   </>
  )
}
