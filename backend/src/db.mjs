import { Sequelize, DataTypes } from "sequelize"

const db = new Sequelize('sqlite:baseDeDatos.sqlite')

const Dato = db.define("Dato",{
    frase: {
        type: DataTypes.STRING
    }
})

db.sync()

export {
    Dato
}