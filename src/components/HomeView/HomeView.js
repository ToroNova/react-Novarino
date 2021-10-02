import React from 'react'

export const HomeView = ({titulo, contenido}) => {
                       // DESESTRUCTURACION  // const {titulo, contenido } = props

                       
    // console.log(props.titulo);
    // console.log(props.contenido);

    
    return (
        <>
        <div className="container"> 
            <h1>{titulo}</h1>
            <hr/>
            <p>{contenido}</p>
        </div>
        </>
        
    )
}
