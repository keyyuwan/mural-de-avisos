const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')
const posts = require('../model/posts')

const options = {
    // vou colocar aqui só o domínio que eu quero liberar (que pode ter acesso a minha api)
    origin: "http://localhost:3000"
}

router.use(cors(options))

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
})

// bodyParser como middleware
router.post("/new", bodyParser.json(), (req, res) => {
    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send("Post adicionado")
})

router.delete("/delete", (req, res) => {
    posts.deletePost()

    res.send("Post apagado")
})

module.exports = router