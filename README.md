# Adaptaciones no código para despregar en producción

## Backend
* Empregar `process.env.PORT` como primeira opción para o porto de escoita de Express e proporciona unha alternativa para o entorno de development.
```js
app.listen(process.env.PORT ?? 8000, ()=>{
    //...
})
```
* Proporciona diferentes alternativas de base de datos para os diferentes entornos (production, development, etc.). Ten en conta que probablemente os datos de acceso á base de datos de producción incluan elementos que deberás manter en segredo, como contrasinais. Proporciona esos datos desde variables de entorno que configurarás na plataforma na que despregarás a túa aplicación.
```js
const db = new Sequelize(
    process.env.NODE_ENV === "production"
    ? process.env.DB_URL
    : 'sqlite:baseDeDatos.sqlite'
)
```
* Move calquera outro dato confidencial a variables de entorno: secretos de firma de JWT, API keys, claves criptográficas, etc...
```js
const JWT_SECRET = process.env.JWT_SECRET
```

## Frontend
* Proporciona as URL para o backend tanto para os entornos de desenrolo como de producción. Podes determinar se a aplicación se atopa en desenrolo ou en producción consultando `window.location.hostname`. En desenrolo adoita ser `localhost` ou `127.0.0.1`
```js
const BACKEND_URL = ["localhost", "127.0.0.1"].includes(window.location.hostname)
    ? "http://localhost:8000"
    : "https://direccion.dobackend.eninternet.com"
```
Logo disto, modifica as chamadas a `fetch` ou calquera outra chamada á API do teu backend do seguinte xeito. Onde tiñas algo como:
```js
fetch("http://localhost:8000/api/artigos")
```
Modifícao dun xeito semellante a este:
```js
fetch(BACKEND_URL+"/api/artigos")
```