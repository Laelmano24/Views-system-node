import { Sequelize, DataTypes } from "sequelize"

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.db"
})

export { sequelize, DataTypes }