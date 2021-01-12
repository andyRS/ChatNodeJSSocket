var express = require('express');
var app= express();
var server = require('http').Server(app);
var io = require('socket.io')(server,{
    cors: { // Permite el acceso de orígenes mixtos (CORS)
        origin: '*'
    }
});



app.use(express.static('client'));

app.get('/hola-mundo', function(req, res){
    res.status(200).send("Hola mundo desde una ruta");
});

var messages =[{
    id: 1,
    text: 'Bienvenido al chat privado de Socket.io y NodeJS de Andy Rosado..',
    nickname: 'Boot - andyrs.github.io/Andyrosadoproyects/'
}];

io.on('connection',function(socket){
    console.log("El nodo con IP: "+socket.handshake.address+" Se ha conectado...");

    socket.emit('messages',messages);

    socket.on('add-message', function(data){
        messages.push(data);

        io.sockets.emit('messages',messages);
    });


});

server.listen(https://andyrs.github.io/ChatNodeJSSocket/, function(){
    console.log('Servidor Funcionando correctamente en http://localhost:6677');
});
