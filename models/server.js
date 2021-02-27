const express = require('express')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersRoutePath = '/api/usuarios';

        // Middlewares
        this.middlewares();


        // Routes
        this.routes();
    }

    routes() {
        this.app.use(this.usersRoutePath, require('../routes/user'));
    }

    middlewares() {
        this.app.use(cors());

        // lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        });
    }

}

module.exports = Server;