let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
];

let nomeAtletas = atletas.map(function(nomes){
        return nomes.nome
    })

let notasObtidas = atletas.map(function(notas){
  return notas.notas
})

function obterMedia(){
        let medias = []; // armazenar médias
        for (let i = 0; i < notasObtidas.length; i++) {
//laço "for" para percorrer todas as notas de todos os atletas
            let organizar = notasObtidas[i];

//criei essa variavel só para armazenar as notas de cada posição "i"
// função compararNumeros e let ordem é para organizar em ordem crescente as notas
            function comparaNumeros(a,b) {
                if (a == b) return 0; 
                if (a < b) return -1; 
                if (a > b) return 1;
                }
            let ordem = organizar.sort(comparaNumeros); 
            let notasComputadas = ordem.slice(1, ((atletas[0].notas.length) - 1))
            let media = notasComputadas.reduce(function(total, atual){
                return total + atual
            },0);
           medias[i] = (media/notasComputadas.length).toFixed(2);// toFixed(2) qtos digitos depois da virgula
        }
        return medias; // retorno a media
    }
for (let i = 0; i < atletas.length; i++) {
  console.log("Nome: " + nomeAtletas[i])
  console.log("Notas: " + notasObtidas[i])
  console.log("Média: " + obterMedia()[i])
}