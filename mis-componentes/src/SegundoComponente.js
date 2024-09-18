import React from 'react'

export const SegundoComponente = () => {

    let nombre = 'Itzy';
    let web = 'http://itzy-ross.com';

    ///Declaracion de objetos
    let usuario = {
        nombre: "Romi",
        apellido: "Hernan",
        edad: 16,
        ciudad: "Puebla"
    };

    ///imprimiendo en consola
    console.log(usuario);

    return (
        <div>
            <hr />
            <h2>Datos del usuario</h2>
            <ul>
                <li>nombre: {nombre}  </li>
                <li>Web: {web} </li>
            </ul>
            <hr />

            <h2>Datos de un objeto</h2>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellido: <strong>{usuario.apellido}</strong></li>
                <li>Edad: <strong>{usuario.edad}</strong></li>
                <li>Ciudad: <strong>{usuario.ciudad}</strong></li>
            </ul>
        </div>
    )
}
