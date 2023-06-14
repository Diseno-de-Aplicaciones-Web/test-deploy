import { useEffect, useRef, useState } from "react"

function App() {

  const htmlInput = useRef()
  const [datos, setDatos] = useState([])

  async function cargarDatosBackend() {
    const respuesta = await fetch("http://localhost:8000/api/datos/")
    if (respuesta.ok) setDatos(await respuesta.json())
  }

  async function gardarNoBackend() {
    const resposta = await fetch("http://localhost:8000/api/datos/",{
      method: "POST", headers: { "Content-Type": "application/json"},
      body: JSON.stringify({frase: htmlInput.value})
    })
    if (resposta.ok) { 
      cargarDatosBackend()
      htmlInput.value=""
    }
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
      <input type="text" ref={htmlInput}/>
      <button on:click={gardarNoBackend}>📨</button>
      {
        datos.length ?
          datos.map( elemento => <p>{elemento.frase}</p> )
          :
          <p>Sin datos</p>
      }
    </main>
  )

}

export default App
