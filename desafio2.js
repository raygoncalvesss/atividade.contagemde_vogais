//desafio um array de vogais
let vogais = ['a', 'e', 'i', 'o', 'u'];
//declarando um array de consoantes
let consoante = ["b", "c", "d", "f", "g",
    "j", "k", "l", "m", "n", "p", "q", "r",
    "s", "t", "v", "w", "x", "y", "z"];
//declarando o texto de entrada
let texto = "contagem de consoantes e vogais";
//dividindo o texto em um array de caracteres individuais 
let arrayletras = texto.split("");
//declarando arrays para armazenar vogais, consoantes e espaços
let arrayespaco = [];
let arrayconsoante = [];
let arrayvogais = [];
//iterando sobre cada caractere no array de letras
for (let i = 0; i < arrayletras.lenght;i++){
    if(vogais.includes(arrayletras[i])){
        arrayvogais.push(arrayletras[i]);
    }
    if(consoante.includes(arrayletras[i])){
        arrayconsoante.push(arrayletras[i])
    }
    if(arrayletras[i] === '') {
        arrayespaco++;
    }
}
//exibindo os resultados 
console.log("texto original:", texto);
console.log("vogais encontradas:", arrayvogais.toString());
console.log("total de vogais:" + arrayvogais.lenght);
console.log("consoantes encontradas:", arrayconsoante.toString());
console.log("total de consoantes:" + arrayconsoante.lenght);
console.log("total de espaços:" + arrayespaco) 


