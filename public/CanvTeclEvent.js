//-----------------evento de teclado refente aos canvas



var socket = io()

//comandos de teclado player 1  apertar
 window.addEventListener('keydown', function(event) {
  if (event.keyCode === 38) {
    socket.emit("arrow-up-keydown");
  } else if (event.keyCode === 40) {
    socket.emit("arrow-down-keydown");//cima e baixo
  }
  if (event.keyCode === 39) {
    socket.emit("arrow-right-keydown");
  } else if (event.keyCode === 37) {
    socket.emit("arrow-left-keydown");//direita e esquerda
  }
  //------botoes player 1 apertando
  if (event.keyCode === 65) {//b
    socket.emit("b-keydown");
  } else if (event.keyCode === 83) {//r
    socket.emit("r-keydown");//botoes apertando
  }

});

//--------------------evento de soltura
window.addEventListener('keyup', function(event) {
  if (event.keyCode === 38) {
    socket.emit("arrow-up-keyup");
  } else if (event.keyCode === 40) {
    socket.emit("arrow-down-keyup");//cima e baixo
  }
  if (event.keyCode === 39) {
    socket.emit("arrow-right-keyup");
  } else if (event.keyCode === 37) {
    socket.emit("arrow-left-keyup");//direita e esquerda
  }
  //-----------botoes player 1
  if (event.keyCode === 65) {//b
    socket.emit("b-keyup");
  } else if (event.keyCode === 83) {//r
    socket.emit("r-keyup");//botoes player 1 soltando a tecla
  }
 
});
