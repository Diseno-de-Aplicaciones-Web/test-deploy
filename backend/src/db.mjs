import { Sequelize, DataTypes } from "sequelize"

const db = new Sequelize(
    process.env.NODE_ENV === "production"
    ? "postgres://ciufsxuy:R0HXuvl8pJF1UmuLJVwM0H3b8_tyHo0b@dumbo.db.elephantsql.com/ciufsxuy"
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