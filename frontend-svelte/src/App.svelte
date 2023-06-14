<script>

  import { backendUrl } from "./config.mjs"

  let datos = []
  let htmlInput

  async function cargarDatosBackend() {
    const respuesta = await fetch(backendUrl+"/api/datos/")
    if (respuesta.ok) datos = await respuesta.json()
  }

  async function gardarNoBackend() {
    const resposta = await fetch(backendUrl+"/api/datos/",{
      method: "POST", headers: { "Content-Type": "application/json"},
      body: JSON.stringify({frase: htmlInput.value})
    })
    if (resposta.ok) { 
      cargarDatosBackend()
      htmlInput.value=""
    }
  }

  cargarDatosBackend()

</script>
<main>
  <h1>Frontend React</h1>
  <p>Hostname: {window.location.hostname}</p>
  <p>Host: {window.location.host}</p>
  <h2>Datos do backend:</h2>
  <input type="text" bind:this={htmlInput}>
  <button on:click={gardarNoBackend}>📨</button>
  {#if datos.length }
    {#each datos as elemento }
    <p>{elemento.frase}</p>
    {/each}
  {:else}
  <p>Sin datos</p>
  {/if}

</main>