import express from "express"
import cors from "cors"
import { Dato } from "./db.mjs"

const app = express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN ?? "*",
        methods: process.env.CORS_METHODS ?? "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
    })
)

app.get("/",(_, resposta)=>{
    resposta.send(`
        <h1>Funciona</h1>
        <p>NODE_ENV: ${process.env.NODE_ENV}</p>
        <p>PORT: ${process.env.PORT}</p>
    `)
})

app.post("/api/datos/", express.json(), async (peticion, resposta)=>{
    const novoDato = await Dato.create(peticion.body)
    resposta.json(novoDato)
})

app.get("/api/datos/", async (_, resposta)=>{
    const datos = await Dato.findAll()
    resposta.json(datos)
})

app.listen(process.env.PORT ?? 8000, ()=>{
    console.log("Backend funcionando...")
    console.log("NODE_ENV", process.env.NODE_ENV)
    console.log("PORT", process.env.PORT)
})

