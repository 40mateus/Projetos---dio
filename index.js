// Definição da classe Gladiador
class Gladiador {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para atacar
  atacar() {
    let ataque;

    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou ataque genérico';
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Criação de um gladiador
const meuGladiador = new Gladiador('Gladiador', 25, 'guerreiro');

// Chamada do método atacar
meuGladiador.atacar();



