const PORT = 3000
const express = require('express')
const apiRoute = require('./routes/api')

const path = require('path')

const app = express()

app.use("/api", apiRoute)
// vou servir a parte estática da página para o usuário
app.use("/", express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log("Server rodando na porta 3000"))



