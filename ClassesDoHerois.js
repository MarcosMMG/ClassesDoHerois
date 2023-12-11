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





// INTERAGINDO COM O USUARIO


// class Heroi {
//     constructor(nome, idade, tipo) {
//         this.nome = nome;
//         this.idade = idade;
//         this.tipo = tipo;
//     }

//     atacar() {
//         let ataques = {
//             mago: "usou magia",
//             guerreiro: "usou espada",
//             monge: "usou artes marciais",
//             ninja: "usou shuriken"
//         };

//         console.log(`O ${this.tipo} de nome ${this.nome}, com idade ${this.idade} anos, atacou usando ${ataques[this.tipo] || "usou um ataque indefinido"} o inimigo.`);
//     }
// }


// let nomeHeroi = prompt("Digite o nome do herói:");
// let idadeHeroi = prompt("Digite a idade do herói:");
// let tipoHeroi = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja):");


// let meuHeroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);


// meuHeroi.atacar();
