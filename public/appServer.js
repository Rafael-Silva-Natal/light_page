const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const socketIo = require('socket.io');

const io = socketIo(server);

server.listen(3000, () => {
    console.log("running")
})

app.use(express.static(__dirname + "/public"))

io.on('connection', (socket) => {

        //---------------------------player1
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

    socket.on("b-keydown", function(event) {//apertando o botao 1
    
        io.emit("A_botao");
    
});
socket.on("b-keyup", function(event) {//soltando o botao1
   
    io.emit("A_botao2");

});
//-------------------
socket.on("r-keydown", function(event) {//apertando o botao2
  
        io.emit("S_botao");
    
});
socket.on("r-keyup", function(event) {//soltando o botao 2
    
        io.emit("S_botao2");
    
});



});



