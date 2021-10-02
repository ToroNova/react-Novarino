import React, {useState} from 'react'

export const ClickTracker = () => {

    const [counter, setCounter] = useState(0)

    const handleCounter = () =>{
        setCounter(counter + 1)
    }

      return (
        <div className="container">
            <button onClick={handleCounter} className="btn btn-primary">
                Click Me!
            </button>
            <hr/>
            <h3> Cantidad de clicks: {counter}</h3>
            <h3> Fecha y Hora: {counter > 0? new Date().toLocaleString() : "No hay clicks aun"}</h3>
        </div>
    )
}
