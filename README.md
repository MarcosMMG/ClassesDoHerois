# ClassesDoHerois

No desenvolvimento do desafio proposto, utilizei os seguintes conceitos fundamentais de programação em JavaScript:

Variáveis: Foram utilizadas para armazenar informações como nome, idade e tipo do herói.

Operadores: O operador lógico || foi empregado para fornecer valores padrão em casos em que o tipo de herói não está presente no objeto de ataques.

Estruturas de Decisões: O bloco switch foi utilizado para decidir qual descrição de ataque deveria ser associada a cada tipo de herói.

Funções: A função atacar() foi criada para exibir mensagens personalizadas com base nas informações do herói e no tipo de ataque.

Classes e Objetos: A classe Heroi foi criada para modelar um herói do jogo de aventura, e objetos dessa classe foram instanciados para representar heróis específicos, como "Marcos" no exemplo fornecido.

Esses conceitos foram combinados para criar uma implementação simples e eficaz de um jogo de aventura em JavaScript, proporcionando uma experiência interativa com heróis que têm diferentes tipos e estilos de ataque.



```

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataques = {
            mago: "usou magia",
            guerreiro: "usou espada",
            monge: "usou artes marciais",
            ninja: "usou shuriken"
        };

        console.log(`O ${this.tipo} de nome ${this.nome}, com idade ${this.idade} anos, atacou usando ${ataques[this.tipo] || "usou um ataque indefinido"} o inimigo.`);
    }
}
let meuHeroi = new Heroi("Marcos", 30, "ninja");
meuHeroi.atacar();

 ```
