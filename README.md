# Adaptaciones no código para depregar en producción

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
* Proporcionar as URL para 