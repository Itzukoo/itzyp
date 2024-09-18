import React, { useState } from 'react'

export const MiEstado = () => {
    /* let nombre="Itzukoo";
    
   const CambiarNombre= (e)=>{
        nombre= "Itzy";*/

        const [nombre, setNombre]= useState("Itzukoo");

        const CambiarNombre = (e, nombreFijo)=>{
          setNombre(nombreFijo);
    }

  return (
    <div>

    <h3>Componente: Mi Estado</h3>
    <p>Mi nombre es: <strong>{nombre}</strong></p>

    <button onClick={CambiarNombre}>Cambiar nombre</button>
    <input type='text' placeholder='Cambiar Nombre'
    onKeyUp={e => CambiarNombre(e, e.target.value)}/>

    </div>
  )
}

export default MiEstado
