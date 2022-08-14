const pessoa = {
  nome: 'João',
  idade: 30,
  prof: 'pintor',
};

pessoa.idade = 31;

const ian: { nome: string; idade: number; prof: string } = {
  nome: 'Ian',
  idade: 30,
  prof: 'desenvolvedor',
};

const julia: { nome: string; idade: number; prof: string } = {
  nome: 'Julia',
  idade: 30,
  prof: 'desenvolvedor',
};

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  Streamer,
}

interface Pessoa {
  nome: string;
  idade: number;
  prof?: Profissao;
  // ? significa que não é obrigatório
}

interface Estudante extends Pessoa {
  materias: string[];
}

const isis: Pessoa = {
  nome: 'Isis',
  idade: 50,
  prof: Profissao.Streamer,
};

const jessica: Estudante = {
  nome: 'Jessica',
  idade: 21,
  prof: Profissao.Atriz,
  materias: ['Matemática', 'Português', 'Inglês'],
};

const monica: Estudante = {
  nome: 'Mônica',
  idade: 21,
  materias: ['Matemática', 'Português', 'Inglês'],
};

function listar(lista: string[]) {
  for (const item of lista) console.log('- ', item)
}

listar(monica.materias)