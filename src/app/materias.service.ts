import { Injectable } from '@angular/core';
interface materia {
  materia: string;
  dia: string;
  hora: string;
}

@Injectable()
export class MateriasService {
  lista: Array<materia> = [
    {
      materia: 'Desenvolvimento para Dispositivos Móveis I',
      dia: 'Segunda-Feira',
      hora: '19:00 - 22:30',
    },
    { materia: 'Inglês V ', dia: 'Terça-Feira', hora: '19:30 - 20:40' },
    {
      materia: 'Negócios e Marketing e Eletrônicos',
      dia: 'Quarta-Feira',
      hora: '19:00 - 22:30',
    },
    {
      materia: 'Desenvolvimento para Servidores II',
      dia: 'Quinta-Feira',
      hora: '19:00 - 22:30',
    },
    {
      materia: 'Tópicos Especiais em Sistemas para Internet II',
      dia: 'Sexta-Feira',
      hora: '19:00 - 22:30',
    },
    {
      materia: 'Projeto de Prototipagem e Testes de Usabilidade',
      dia: 'Sábado',
      hora: '8:00 - 11:30',
    },
    {
      materia: 'Estágio Supervisionado em Sistemas para Internet',
      dia: '',
      hora: '',
    },
    {
      materia: 'Projeto de Trabalho de Graduação em Sistemas para Internet I',
      dia: 'Sábado',
      hora: '11:30 - 13:10',
    },
  ];
  constructor() {}

  getLista() {
    return this.lista;
  }
  add(materia: string, dia: string, hora: string) {
    this.lista.push({ materia, dia, hora });
  }
  remove(index: number) {
    this.lista.splice(index, 1);
  }
}
