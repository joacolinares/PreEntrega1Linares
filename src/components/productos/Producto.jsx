import React from 'react'
import { ItemCount } from './herramientas/ItemCount'

export const Producto = () => {
    return (<>
        <h1>Productos</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div style={{ border: "1px solid", width: "20%", position: "absolute", left: "150px" }}><ItemCount titulo="Teclado Gamer RGB" stock={5} categoria={"Electronica"} /></div>
    </>
    )
}
