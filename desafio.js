//desafio de contagem de vogais
let palavra = "pneumoultramicroscopicossilicovulcanoconiótico";
let palavra2 = palavra.split("");
let vogais = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
let quanvogais = palavra2.filter(letras => vogais.includes(letras));
console.log("A quantidade de vogais é: " + quanvogais.length);
console.log(quanvogais);
