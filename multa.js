const prompt = require('prompt-sync')()

const pergunta = () =>{
 number = prompt("Digite a velocidade em que o veículo estava : ")
 return{
    numero : number
 }
}

const calculo = (velocidade) =>{
return (velocidade - 60)*10
}

const main = () =>{
    let userData = pergunta()
    let numero = userData.numero
    let resultado = calculo(number)
    if(number>60)
    console.log(`Você estava a ${number}KM/H assim tendo uma multa de ${resultado}`)
    else if(number<=60){
        console.log("Você estava abaixo da velocidade limite, assim não recebendo multa")
    }
}

main()