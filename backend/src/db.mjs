import { Sequelize, DataTypes } from "sequelize"

const db = new Sequelize(
    process.env.NODE_ENV === "production"
    ? process.env.DB_URL
    : 'sqlite:baseDeDatos.sqlite'
)

const Dato = db.define("Dato",{
    frase: {
        type: DataTypes.STRING
    }
})

db.sync()

export {
    Dato
}