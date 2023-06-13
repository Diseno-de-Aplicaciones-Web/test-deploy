import express from "express"

const app = express()

app.get("/",(peticion, resposta)=>{
    resposta.send(`
        <h1>Funciona</h1>
        <p>NODE_ENV: ${process.env.NODE_ENV}</p>
        <p>PORT: ${process.env.PORT}</p>
    `)
})

app.listen(8000, ()=>{
    console.log("Backend funcionando...")
    console.log("NODE_ENV", process.env.NODE_ENV)
    console.log("PORT", process.env.PORT)
})

