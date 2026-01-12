import { GradeModel } from '../models/Grade.model';

export const GradesData: GradeModel[] = [
  new GradeModel('Baby', ['cinza', 'cinza ponta verde', 'cinza ponta amarela', 'cinza ponta azul']),

  new GradeModel('Enfant Ados', [
    'verde cinza',
    'amarelo cinza',
    'azul cinza',
    'verde amarelo cinza',
    'verde azul cinza',
    'amarelo azul cinza',
  ]),

  new GradeModel('Ados Adulte', [
    'verde',
    'verde ponta amarelo',
    'amarelo',
    'amarelo ponta azul',
    'azul',
    'verde amarelo',
    'verde azul',
    'amarelo azul',
  ]),
];
