import { sequelize } from "./configs/database.js"
import express from "express"
import showViews from "./controlers/showViews.js"

const app = express()
app.use(express.json())

app.get("/users/:user", async (req, res) => {
    try {
        const { user } = req.params

        if (!user) {
            return res.status(400).send("Erro no cliente: dados ausentes.")
        }

        const resuilt = await showViews(user)
        res.status(200).json({status: 200, views: resuilt})
    } catch (err) {
        console.error("Erro no servidor:", err)
        res.status(500).send("Erro no servidor")
    }
})

sequelize.authenticate()
.then(() => {
    console.log("Conectado ao banco com sucesso!")
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    })
})
.catch(err => {
    console.error("Erro ao conectar com o banco:", err)
})