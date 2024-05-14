const express = require("express");
const app = express();
const PORT = 3000;
const usuarios = ["Juan", "Jocelyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"];

app.listen(PORT, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

const validateUser = (req, res, next) => {
    const user = req.params.usuario;
    if (usuarios.includes(user)) {
        next();
    } else {
        res.sendFile(__dirname + '/assets/who.jpeg');
    }
};

app.use(express.static("assets"));

const randomNumber = () => {
    return Math.floor(Math.random() * 4) + 1;
};

app.get('/abracadabra/usuarios', (req, res) => {
    res.json({ usuarios: usuarios });
});

app.get('/abracadabra/juego/:usuario', validateUser, (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/abracadabra/conejo/:n', (req, res) => {
    const n = parseInt(req.params.n);
    const generatedNumber = randomNumber();

    if (n === generatedNumber) {
        res.sendFile(__dirname + '/assets/conejito.jpg');
    } else {
        res.sendFile(__dirname + '/assets/voldemort.jpg');
    }
});

app.get("*", (req, res) => {
    res.send("<p>Esta página no existe</p>");
});





