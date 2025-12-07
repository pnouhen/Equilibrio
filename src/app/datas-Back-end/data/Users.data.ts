import { UsersMembers } from '../models/Users-members';
import { UsersModel } from '../models/Users.model';

export const UsersData: UsersModel[] = [
  new UsersModel('pierre.nouhen@orange.fr', '123456789Pn!', 'Pierre', [
    new UsersMembers('Baby', 'baby', 'blue'),
    new UsersMembers('Enfants', 'children', 'blue'),
    new UsersMembers('Ados', 'teen', 'blue'),
    new UsersMembers('Adulte', 'adult', 'blue'),
  ]),

  new UsersModel('pierre.nouhen@orange.f', '123456789Pn!', 'Pierre', [
    new UsersMembers('Adulte', 'adult', 'blue'),
  ]),
];
