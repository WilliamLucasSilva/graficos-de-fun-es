    //entrada

const ctx = document.getElementById('myChart')
const botao = document.getElementById('gerar')
const lista = document.getElementById('tipos')
const espaço = document.getElementById('espaco')
const numero_a = document.getElementById('a')
const numero_b = document.getElementById('b')
const visor_formula = document.getElementById('formula')
var intervalo = 0




/*========================================================*/

//operações
lista.addEventListener("click", () => {
    let tipo = lista.value

    if(tipo == 'afim'){
        visor_formula.innerHTML = "a + b * intervalo"
    }else if(tipo == 'exponencial'){
        visor_formula.innerHTML = "a + b ^ intervalo"
    }
})

botao.addEventListener("click", () => {

        //entrada

    let tipo = lista.value
    let valor = ''
    let a = Number(numero_a.value)
    let b = Number(numero_b.value)
    intervalo = espaço.value

        //operações
    let colunas = obtem_colunas(intervalo)

    if(tipo == 'afim'){
        valor = funcao_afim(a,b)
    }else if(tipo == 'exponencial'){
        valor = funcao_exponencial(a,b)
    }
    

        //saida

    grafico.data.datasets[0].label = tipo
    grafico.data.labels = colunas
    grafico.data.datasets[0].data = valor
    grafico.update() 
})

/*========================================================*/



/*========================================================*/

function obtem_colunas(intervalo){
    let colunas = []

    for(i = 1; i <= intervalo; i ++){
        let string_i = String(i)
        colunas.push(string_i)
    }

    return colunas
}

/*========================================================*/

function funcao_afim(a,b){
    //entrada
    var numa = a
    var numb = b
    let valor = []

    //operações
    for(i = 0; i < intervalo; i ++){
        x = i
        let e = valor_afim(numa,numb,x)
        valor.push(e)
    }

    //saida
    
    return valor
}

function valor_afim(a,b,x){
    let valor = a + (b * x)
    return valor 
}

/*========================================================*/

function funcao_exponencial(a,b){
    //entrada

    let valor = []

    //operações
    for(i = 0; i < intervalo; i ++){
        x = i
        e = valor_exponencial(a,b,x)
        valor.push(e)
    }

    //saida
    return valor
}

function valor_exponencial(a,b,x){
    let elevado = elevar(b,x)
    let valor = a + elevado
    return valor
}

/*========================================================*/

function elevar(valor, expoente){
    //entrada
    let resultado = valor

    //operações
    for(i = 0; i < expoente; i++){
        resultado = resultado * valor
    }

    //saida
    return resultado
}

/*========================================================*/

    //saida

var grafico = new Chart(ctx, {
        type: 'line',
        data: {
        labels: ['1','2'],
        datasets: [{
            label:'afim',
            data: ['4', '5'],
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: false
            }
        }
        }
    });

