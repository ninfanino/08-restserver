const { response, request } = require('express')

const usersGet = (req = request, res = response) => {
    const { q, nombre, apiKey } = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apiKey
    })
}

const usersPost = (req, res) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API',
        nombre,
        edad
    })
}

const usersPut = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'put API',
        id
    })
}

const usersDelete = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'delete API',
        id
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}