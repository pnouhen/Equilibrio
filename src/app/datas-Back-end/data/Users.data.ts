import { UsersMembers } from '../models/Users-members';
import { UsersModel } from '../models/Users.model';

export const UsersData: UsersModel[] = [
  new UsersModel('multi-membre@student.fr', '123456789Pn!', 'student', [
    new UsersMembers('Baby',  'baby', 'cinza-ponta-verde'),
    new UsersMembers('Enfants', 'child', 'azul-cinza'),
    new UsersMembers('Gus Ados', 'teen', 'verde-cinza'),
    new UsersMembers('Adulte', 'adult', 'verde-amarelo'),
  ]),

  new UsersModel('single-membre@student.fr', '123456789Pn!', 'student', [
    new UsersMembers('Adulte',  'adult', 'azul'),
  ]),
];
