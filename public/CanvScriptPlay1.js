//referente ao canvas do player 1
//--------------------------------------------player 1---------------
var socket = io();

var canvas=document.getElementById("desenho1");// o Elemento byId "desenho1" é o mesmo que indica as bordas do canvas
var ctx=canvas.getContext('2d');

ctx.fillStyle="#1C1C1C";
ctx.beginPath();
ctx.rect(0,0,150,150); //cor de fundo no canvas direcionais
ctx.fill();
ctx.fillStyle="#180e3d";
ctx.beginPath();
ctx.rect(150,0,100,150);//cor de fundo no canvas botoes
ctx.fill();

ctx.fillStyle = "#000";//apertando o botao para cima
ctx.beginPath();
ctx.rect(55,10,40,40); 
ctx.fill();
socket.on("cima", function(){//apertando o botao para cima
    ctx.fillStyle= "#f5f6fa";
    ctx.beginPath();
    ctx.rect(55,10,40,40);
    ctx.fill();
});//apertando o botao para cima

socket.on("cima2", function(){//soltando o botao para cima
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.rect(55,10,40,40);
    ctx.fill();
});//soltando o botao para cima

//----------------------------

ctx.fillStyle="#000";//apertando o botao para baixo
ctx.beginPath();
ctx.rect(55,100,40,40); 
ctx.fill();
socket.on("baixo", function(){//apertando o botao para baixo
    ctx.fillStyle= "#f5f6fa";
    ctx.beginPath();
    ctx.rect(55,100,40,40);
    ctx.fill();
});//apertando o botao para baixo

socket.on("baixo2", function(){//soltando o botao para baixo
    ctx.fillStyle= "#000";
    ctx.beginPath();
    ctx.rect(55,100,40,40);
    ctx.fill();
});//soltando o botao para baixo

//--------------------------

ctx.fillStyle = "#000";//apertando o botao para direita
ctx.beginPath();
ctx.rect(100,55,40,40); 
ctx.fill();
socket.on("direita", function(){//apertando o botao para direita
    ctx.fillStyle= "#f5f6fa";
    ctx.beginPath();
    ctx.rect(100,55,40,40);
    ctx.fill();
});//apertando o botao para direita

socket.on("direita2", function(){//soltando o botao para direita
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.rect(100,55,40,40);
    ctx.fill();
});//soltando o botao para direita

//-----------------------

ctx.fillStyle = "#000";//apertando o botao para esquerda
ctx.beginPath();
ctx.rect(10,55,40,40); 
ctx.fill();
socket.on("esquerda", function(){//apertando o botao para esquerda
    ctx.fillStyle= "#f5f6fa";
    ctx.beginPath();
    ctx.rect(10,55,40,40);
    ctx.fill();
});//apertando o botao para esquerda

socket.on("esquerda2", function(){//soltando o botao para esquerda
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.rect(10,55,40,40);
    ctx.fill();
});//soltando o botao para esquerda

//-------------------------

ctx.fillStyle = "#000";//apertando o botao 1
ctx.beginPath();
ctx.rect(155,35,40,40); 
ctx.fill();
socket.on("A_botao", function(){//apertando o botao 1
    ctx.fillStyle= "#f5f6fa";
    ctx.beginPath();
    ctx.rect(155,35,40,40);
    ctx.fill();
});//apertando o botao 1

socket.on("A_botao2", function(){//soltando o botao 1
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.rect(155,35,40,40);
    ctx.fill();
});//soltando o botao 1


//-----------------------

ctx.fillStyle = "#000";//apertando o botao 2
ctx.beginPath();
ctx.rect(205,75,40,40); 
ctx.fill();
socket.on("S_botao", function(){//apertando o botao 2
    ctx.fillStyle= "#f5f6fa";
    ctx.beginPath();
    ctx.rect(205,75,40,40);
    ctx.fill();
});//apertando o botao 2

socket.on("S_botao2", function(){//soltando o botao 2
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.rect(205,75,40,40);
    ctx.fill();
});//soltando o botao 2

