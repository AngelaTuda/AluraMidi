function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
    //document.querySelector('.tecla_pom').onclick=tocaSomPom;
    //console.log(contador);

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