class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria(){
        if (this.idade >= 16){
            return "Adulto";
        } else if (this.idade >= 14) {
            return "Intermediário";
        } else if (this.idade >= 12) {
            return "Juvenil";
        } else if (this.idade >= 9) {
            return "Infantil";
        } else {
            return "Demais Idades";
        }
    }
    
    calculaIMC(){
        let imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }

    calculaMediaValida(){
            let organizar = this.notas;
            function comparaNumeros(a,b) {
                if (a == b) return 0; 
                if (a < b) return -1; 
                if (a > b) return 1;
                }      
            let ordem = organizar.sort(comparaNumeros); 
            let notasComputadas = ordem.slice(1,4)
            let media = notasComputadas.reduce(function(total, atual){
                return total + atual
            },0)    
            
           let medias = (media/notasComputadas.length).toFixed(2);
           return medias;
        }
    

    obtemNomeAtleta(){
        return "Nome: " + this.nome
    }
    obtemIdadeAtleta(){
        return "Idade: " + this.idade + " anos"
    }
    obtemPesoAtleta(){
        return "Peso: " + this.peso + "kg"
    }
    obtemAlturaAtleta(){
        return "Altura: " + this.altura + "m"
    }
    obtemNotasAtleta(){
        return "Notas: " + this.notas.join(", ");
    }
    obtemCategoria(){
        return "Categoria: " + atleta.calculaCategoria();
    }
    obtemIMC(){
        return "IMC: " + atleta.calculaIMC();
    }
    obtemMediaValida(){
        return "Média válida: "+ atleta.calculaMediaValida() + " pontos";
    }
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());