const express = require ('express')
const PersonController = require ('./controllers/PersonController')
const routes = new express.Router()


routes.post('/register', PersonController.register)
routes.get("/", (req, res) => {
    return res.send('Servidor rodando bem..., API acess https://form-app-react.herokuapp.com/docs/')
})

module.exports = routes