
window.addEventListener('keydown',(event)=>{
    if(event.keyCode==38){//seta para cima
        ctx.fillStyle="#000"
        ctx.fillRect(55,10,40,40)
    }else if(event.keyCode==40){
        ctx.fillStyle="#000"
        ctx.fillRect(55,100,40,40) // para baixo
    }
    if(event.keyCode==39){//seta para direita
        ctx.fillStyle="#000"
        ctx.fillRect(100,55,40,40) //para direita
    }else if(event.keyCode==37){
        ctx.fillStyle="#000"
        ctx.fillRect(10,55,40,40) //para esquerda
    }
    if(event.keyCode==65){
        ctx.fillStyle="#000"
        ctx.fillRect(155,35,40,40) //botao1
    }else if(event.keyCode==83){
        ctx.fillStyle="#000"
        ctx.fillRect(205,75,40,40) //botao2
    }

})

window.addEventListener('keyup',(event)=>{
    if(event.keyCode==38){//seta para cima
        ctx.fillStyle="#f5f6fa"
        ctx.fillRect(55,10,40,40)
    }else if(event.keyCode==40){
        ctx.fillStyle="#f5f6fa"
        ctx.fillRect(55,100,40,40) // para baixo
    }
    if(event.keyCode==39){//seta para direita
        ctx.fillStyle="#f5f6fa"
        ctx.fillRect(100,55,40,40) //para direita
    }else if(event.keyCode==37){
        ctx.fillStyle="#f5f6fa"
        ctx.fillRect(10,55,40,40) //para esquerda
    }
    if(event.keyCode==65){
        ctx.fillStyle="#f5f6fa"
        ctx.fillRect(155,35,40,40) //botao1
    }else if(event.keyCode==83){
        ctx.fillStyle="#f5f6fa"
        ctx.fillRect(205,75,40,40)//botao2 
    }


})