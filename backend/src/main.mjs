import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.get("/",(_, resposta)=>{
    resposta.send(`
        <h1>Funciona</h1>
        <p>NODE_ENV: ${process.env.NODE_ENV}</p>
        <p>PORT: ${process.env.PORT}</p>
    `)
})

app.get("/api/datos/",(_, resposta)=>{
    resposta.json([
        "Un dato",
        "Outro dato",
        "O último dato"
    ])
})

app.listen(8000, ()=>{
    console.log("Backend funcionando...")
    console.log("NODE_ENV", process.env.NODE_ENV)
    console.log("PORT", process.env.PORT)
})

