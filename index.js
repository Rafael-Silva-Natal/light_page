const express = require('express');
const app = express()
const porta = process.env.PORT

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/LigthJoystik/index.html");
});
app.listen(porta, () => { console.log('rodando') })

io.on('connection', function(socket) {
    console.log('Nova conexão') 

   socket.on("arrow-up-keydown", function(event) {//apertando o botao para cima
    
            io.emit("cima");
        
    });
    socket.on("arrow-up-keyup", function(event) {//soltando o botao para cima
       
        io.emit("cima2");
    
    });
    //----------------------------

    socket.on("arrow-down-keydown", function(event) {//apertando o botao para baixo
      
            io.emit("baixo");
        
    });
    socket.on("arrow-down-keyup", function(event) {//soltando o botao para baixo
        
            io.emit("baixo2");
        
    });
    //----------------------------

    socket.on("arrow-right-keydown", function(event) {//apertando o botao para direita
    
            io.emit("direita");
        
    });
    socket.on("arrow-right-keyup", function(event) {//soltando o botao para direita
       
        io.emit("direita2");
    
    });
    //-------------------------------

    socket.on("arrow-left-keydown", function(event) {//apertando o botao para esquerda
      
            io.emit("esquerda");
        
    });
    socket.on("arrow-left-keyup", function(event) {//soltando o botao para esquerda
        
            io.emit("esquerda2");
        
    });

    //---------------------

    socket.on("a-keydown", function(event) {//apertando o botao 1
    
        io.emit("A_botao");
    
});
socket.on("a-keyup", function(event) {//soltando o botao1
   
    io.emit("A_botao2");

});
//-------------------
socket.on("s-keydown", function(event) {//apertando o botao2
  
        io.emit("S_botao");
    
});
socket.on("s-keyup", function(event) {//soltando o botao 2
    
        io.emit("S_botao2");
    
});


});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
