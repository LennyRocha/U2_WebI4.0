import React from 'react'

export default function Data({name, pass, email}) {
  return (
    <div>
    <h1>Tus datos</h1>
    <p>{name}</p>
    <p>{pass}</p>
    <p>{email}</p>
    <button
      onClick={() => {
        setExito(!exito);
        setName("");
        setPass("");
        setEmail("");
      }}
    >
      Volver
    </button></div>
  )
}