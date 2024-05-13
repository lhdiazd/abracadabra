const express = require("express");
const app = express();
const PORT = 3000;

const usuarios = ["Juan", "Jocelyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"];


const validarUsuario = (req, res, next) => {
    const user = req.params.usuario;
    if (usuarios.includes(user)) {      
        next();
    } else {     
        res.sendFile(__dirname + '/assets/who.jpeg'); 
    }
};

app.get('/abracadabra/usuarios', (req, res) => {
    res.json({usuarios : usuarios});
});


app.use(express.static("assets"));


app.get('/abracadabra/juego/:usuario', validarUsuario, (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
  
 

  