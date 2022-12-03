console.log('ativando o script do programa');


var canvas=document.getElementById("controle");
var ctx=canvas.getContext('2d');

ctx.fillStyle="#000"
ctx.fillRect(0,0,150,150) //cor de fundo no canvas direcionais
ctx.fillStyle="#180e3d"
ctx.fillRect(150,0,100,150) //cor de fundo no canvas botoes

ctx.fillStyle="#f5f6fa"
ctx.fillRect(55,10,40,40) //para cima
ctx.fillStyle="#f5f6fa"
ctx.fillRect(55,100,40,40) // para baixo
ctx.fillStyle="#f5f6fa"
ctx.fillRect(100,55,40,40) //para direita
ctx.fillStyle="#f5f6fa"
ctx.fillRect(10,55,40,40) //para esquerda


ctx.fillStyle="#f5f6fa"
ctx.fillRect(155,35,40,40) //botao1
ctx.fillStyle="#f5f6fa"
ctx.fillRect(205,75,40,40) //botao2
  

console.log('codigo script ativado ');






