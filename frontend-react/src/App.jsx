import { useEffect, useState } from "react"

function App() {

  const [datos, setDatos] = useState([])

  async function cargarDatosBackend() {
    const respuesta = await fetch("http://localhost:8000/api/datos/")
    if (respuesta.ok) setDatos(await respuesta.json())
  }

  useEffect(
    () => {cargarDatosBackend()},
    []
  )

  return (
    <main>
      <h1>Frontend React</h1>
      <p>Hostname: {window.location.hostname}</p>
      <p>Host: {window.location.host}</p>
      <h2>Datos do backend:</h2>
      {
        datos.length ?
          datos.map( elemento => <p>{elemento}</p> )
          :
          <p>Sin datos</p>
      }
    </main>
  )

}

export default App
