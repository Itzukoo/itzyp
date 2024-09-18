import React from 'react'


export const TercerComponente = ({nombre,apellido,ficha}) => {

    

    const libros = ["La mecanica del corazón",
        "Trans-tornos",
        "Negligencia???"];

    return (
        <div>
         <h2>Mis libros favs</h2>

         <ul>
            <li>{libros[0]}</li>
            <li>{libros[1]}</li>
            <li>{libros[2]}</li>
         </ul>

         <hr />
         
         <h2>Libros leídos</h2>
           <ul>
                {
                    libros.map((libro ,indice)=>{
                        return <li key={indice}>{libro}</li>
                    })
                }
           </ul>

           <hr />
           <h2>Ficha médica</h2>
           <ul>
            <li><strong>Nombre: </strong>{nombre}</li>
            <li><strong>Apellido: </strong>{apellido}</li>
            <li><strong>Alergias: </strong>{ficha.alergias}</li>   /*a los chacales*/
            <li><strong>Grupo sanguineo: </strong>{ficha.grupoSangre}</li>
            <li><strong>Estado de salud: </strong>{ficha.estadoSalud}</li>
            <li><strong>Altura: </strong>{ficha.altura}</li>

            tabnine
           </ul>
        </div>
    )
}
