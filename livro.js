const prompt = require('prompt-sync')()

const pergunta = () =>{
 number = prompt("Digite a quantidade de livros que deseja : ")
return{
    numero: number
}
}

const calculo = (quantidade) =>{
    if(quantidade<7){
        return quantidade*22
    }
    else if(quantidade>7){
        return quantidade*15
    }
    return quantidade
}

const main = ()=>{
    let userData  = pergunta()
    let numero = userData.numero
    let resultado = calculo(number)
    console.log(`A quantidade de livros foi de ${number} e o preço final ficou de ${resultado}`)
}

main()