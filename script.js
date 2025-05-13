var botao = document.getElementById(botao);
var contador = 0;

function contadorDaSilva(){
    
        var body = document.getElementById('body')
        body.style.backgroundColor = 'red'
        contador++

        if(contador == 1 ){contadorDaSilva}

else{
    var body = document.getElementById('body')
    body.style.backgroundColor = 'yellow';
    contador = 0 ;
    console.log(contador);
}

};      



console.log(contador)
;

    









