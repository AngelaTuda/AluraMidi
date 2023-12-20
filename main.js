function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
};

//document.querySelector('.tecla_pom').onclick=tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador + listaDeTeclas.length){
    const instrumento = listaDeTeclas[contador].classList[1];

    //console.log(instrumento);



    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_pom');
    };

    contador = contador + 1;

    //console.log(contador);
}






/*Em let a variável pode ter alteração de valores. Em const significa que o valor é uma constante, 
ou seja, a variável tem valores imutáveis (que não podem ser alterados).
Utilizamos o document.querySelectorAll() para selecionarmos todos os elementos do seletor desejado, 
reduzindo a quantidade de repetição de código, que consequentemente, promoverá uma otimização no código 
em alternativa a repetição.
A função é o conjunto de instruções de código, que executa uma determinada tarefa, que é utilizada
somente quando chamada/invocado, podendo receber parâmetros ou não. Os parâmetros de uma função são
como variáveis ficam disponíveis apenas no corpo da função. Eles servem para auxiliar em alguma lógica no
código dentro de uma função.
*/