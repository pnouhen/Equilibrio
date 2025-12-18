import { UsersMembers } from '../models/Users-members';
import { UsersModel } from '../models/Users.model';

export const UsersData: UsersModel[] = [
  new UsersModel('pierre.nouhen@orange.fr', '123456789Pn!', 'Pierre', [
    new UsersMembers('Baby', "student", 'baby', 'cinza-ponta-verde'),
    new UsersMembers('Enfants',"student", 'child', 'azul-cinza'),
    new UsersMembers('Gus Ados',"student", 'teen', 'verde-cinza'),
    new UsersMembers('Adulte',"student", 'adult', 'verde-amarelo'),
  ]),

  new UsersModel('pierre.nouhen@orange.f', '123456789Pn!', 'Pierre', [
    new UsersMembers('Adulte', "student", 'adult', 'azul'),
  ]),
];
