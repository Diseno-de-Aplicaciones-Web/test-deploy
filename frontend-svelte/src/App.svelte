<script>

  let datos = []

  async function cargarDatosBackend() {
    const respuesta = await fetch("http://localhost:8000/api/datos/")
    if (respuesta.ok) datos = await respuesta.json()
  }

  cargarDatosBackend()

</script>
<main>
  <h1>Frontend React</h1>
  <p>Hostname: {window.location.hostname}</p>
  <p>Host: {window.location.host}</p>
  <h2>Datos do backend:</h2>
  {#if datos.length }
    {#each datos as elemento }
    <p>{elemento.frase}</p>
    {/each}
  {:else}
  <p>Sin datos</p>
  {/if}

</main>