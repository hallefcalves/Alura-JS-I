console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //Adicionando um item na lista
console.log("Destinos possíveis: ")
// console.log(salvador);
// console.log(saoPaulo);
// console.log(rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1)

console.log(listaDeDestinos.length);
console.log(listaDeDestinos[1])
