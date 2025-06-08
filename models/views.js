import { sequelize, DataTypes } from "../configs/database.js"

const viewsCount = sequelize.define("views", {
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    views: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

viewsCount.sync()

export default viewsCount
