import { UserDataCityScheduleModel } from '../models/UserData-city-schedule.model';
import { UserDataTrainingModel } from '../models/UserData-training.model';
import { UsersMembers } from '../models/Users-members';
import { UsersModel } from '../models/Users.model';

export const UsersData: UsersModel[] = [
  // Students
  new UsersModel('0', 'single-membre@student.fr', '123456789Pn!', 'student', [
    new UsersMembers('Adulte', 'adult', 'azul', new UserDataTrainingModel([], [])),
  ]),

  new UsersModel('1', 'multi-membre@student.fr', '123456789Pn!', 'student', [
    new UsersMembers('Baby', 'baby', 'cinza-ponta-verde', new UserDataTrainingModel([], [])),
    new UsersMembers('Enfants', 'child', 'azul-cinza', new UserDataTrainingModel([], [])),
    new UsersMembers('Ados', 'teen', 'verde-cinza', new UserDataTrainingModel([], [])),
    new UsersMembers('Adulte', 'adult', 'verde-amarelo', new UserDataTrainingModel([], [])),
  ]),

  // Teacher
  new UsersModel('2', 'teacher@teacher.fr', '123456789Pn!', 'teacher', [
    new UsersMembers('Baby', 'baby', 'novato', new UserDataTrainingModel([], [])),
    new UsersMembers('Enfants', 'child', 'novato', new UserDataTrainingModel([], [])),
    new UsersMembers('Gus Ados', 'teen', 'novato', new UserDataTrainingModel([], [])),
    new UsersMembers('Adulte', 'adult', 'novato', new UserDataTrainingModel([], [])),
  ]),

  // Admin
  new UsersModel('3', 'pierre.nouhen@orange.fr', '123456789Pn!', 'admin', [
    new UsersMembers('Baby', 'baby', 'novato', new UserDataTrainingModel([], [])),
    new UsersMembers('Enfants', 'child', 'novato', new UserDataTrainingModel([], [])),
    new UsersMembers('Gus Ados', 'teen', 'novato', new UserDataTrainingModel([], [])),
    new UsersMembers('Adulte', 'adult', 'novato', new UserDataTrainingModel([], [])),
  ]),

  // Exemples:
  new UsersModel('4', 'student1@brive.fr', 'Password123!', 'student', [
    // Baby
    new UsersMembers(
      'Alice Dupont',
      'baby',
      'cinza-ponta-verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Lundi : 18h - 19h')],
        [
          'Mon Oct 06 2025 18:00:00 GMT+0100 (CET)',
          'Mon Oct 20 2025 18:00:00 GMT+0100 (CET)',
          'Mon Nov 03 2025 18:00:00 GMT+0100 (CET)',
          'Mon Dec 01 2025 18:00:00 GMT+0100 (CET)',
          'Mon Dec 15 2025 18:00:00 GMT+0100 (CET)',
        ]
      )
    ),

    // Child
    new UsersMembers(
      'Lucas Martin',
      'child',
      'verde-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Samedi : 11h - 12h30')],

        [
          'Sat Oct 04 2025 11:00:00 GMT+0100 (CET)',
          'Sat Oct 18 2025 11:00:00 GMT+0100 (CET)',
          'Sat Nov 01 2025 11:00:00 GMT+0100 (CET)',
          'Sat Nov 15 2025 11:00:00 GMT+0100 (CET)',
          'Sat Dec 06 2025 11:00:00 GMT+0100 (CET)',
        ]
      )
    ),

    // Teen
    new UsersMembers(
      'Julie Bernard',
      'teen',
      'verde',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Lundi : 19h30 - 21h'),
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Samedi : 11h - 12h30'),
        ],
        [
          'Mon Oct 06 2025 19:30:00 GMT+0100 (CET)',
          'Sat Oct 11 2025 11:00:00 GMT+0100 (CET)',
          'Sat Oct 18 2025 11:00:00 GMT+0100 (CET)',
          'Mon Oct 20 2025 19:30:00 GMT+0100 (CET)',
          'Mon Nov 03 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 08 2025 11:00:00 GMT+0100 (CET)',
          'Mon Nov 17 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 22 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 01 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 06 2025 11:00:00 GMT+0100 (CET)',
          'Sat Dec 20 2025 11:00:00 GMT+0100 (CET)',
        ]
      )
    ),

    // Adult
    new UsersMembers(
      'Marc Leroy',
      'adult',
      'verde-amarelo',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Lundi : 19h30 - 21h'),
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Samedi : 11h - 12h30'),
        ],
        [
          'Mon Oct 06 2025 19:30:00 GMT+0100 (CET)',
          'Sat Oct 11 2025 11:00:00 GMT+0100 (CET)',
          'Sat Oct 18 2025 11:00:00 GMT+0100 (CET)',
          'Mon Oct 20 2025 19:30:00 GMT+0100 (CET)',
          'Mon Oct 27 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 01 2025 11:00:00 GMT+0100 (CET)',
          'Sat Nov 08 2025 11:00:00 GMT+0100 (CET)',
          'Mon Nov 03 2025 19:30:00 GMT+0100 (CET)',
          'Mon Nov 17 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 22 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 01 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 06 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 15 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 13 2025 11:00:00 GMT+0100 (CET)',
          'Sat Dec 20 2025 11:00:00 GMT+0100 (CET)',
        ]
      )
    ),
  ]),

  new UsersModel('5', 'student2@brive.fr', 'Password123!', 'student', [
    // Baby
    new UsersMembers(
      'Emma Petit',
      'baby',
      'cinza-ponta-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Samedi : 10h - 11h')],
        [
          'Sat Oct 04 2025 10:00:00 GMT+0100 (CET)',
          'Sat Oct 18 2025 10:00:00 GMT+0100 (CET)',
          'Sat Nov 01 2025 10:00:00 GMT+0100 (CET)',
          'Sat Dec 06 2025 10:00:00 GMT+0100 (CET)',
        ]
      )
    ),
    // Child
    new UsersMembers(
      'Nathan Dubois',
      'child',
      'amarelo-azul-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Lundi : 18h - 19h')],
        [
          'Mon Oct 06 2025 18:00:00 GMT+0100 (CET)',
          'Mon Oct 20 2025 18:00:00 GMT+0100 (CET)',
          'Mon Nov 17 2025 18:00:00 GMT+0100 (CET)',
        ]
      )
    ),
    // Teen
    new UsersMembers(
      'Clara Moreau',
      'teen',
      'verde-ponta-amarelo',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Lundi : 19h30 - 21h'),
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Samedi : 11h - 12h30'),
        ],
        [
          'Mon Oct 06 2025 19:30:00 GMT+0100 (CET)',
          'Sat Oct 11 2025 11:00:00 GMT+0100 (CET)',
          'Mon Oct 20 2025 19:30:00 GMT+0100 (CET)',
          'Sat Oct 25 2025 11:00:00 GMT+0100 (CET)',
          'Mon Nov 03 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 08 2025 11:00:00 GMT+0100 (CET)',
          'Mon Nov 17 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 22 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 01 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 06 2025 11:00:00 GMT+0100 (CET)',
        ]
      )
    ),
    // Adult
    new UsersMembers(
      'Jean Michel',
      'adult',
      'amarelo',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Lundi : 19h30 - 21h'),
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Samedi : 11h - 12h30'),
        ],
        [
          'Mon Oct 06 2025 19:30:00 GMT+0100 (CET)',
          'Sat Oct 11 2025 11:00:00 GMT+0100 (CET)',
          'Sat Oct 18 2025 11:00:00 GMT+0100 (CET)',
          'Mon Oct 20 2025 19:30:00 GMT+0100 (CET)',
          'Mon Oct 27 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 01 2025 11:00:00 GMT+0100 (CET)',
          'Sat Nov 08 2025 11:00:00 GMT+0100 (CET)',
          'Mon Nov 03 2025 19:30:00 GMT+0100 (CET)',
          'Mon Nov 17 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 22 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 01 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 06 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 15 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 20 2025 11:00:00 GMT+0100 (CET)',
        ]
      )
    ),
  ]),

  new UsersModel('6', 'student3@brive.fr', 'Password123!', 'student', [
    // Baby
    new UsersMembers(
      'Louis Richard',
      'baby',
      'cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Lundi : 18h - 19h')],
        [
          'Mon Oct 06 2025 18:00:00 GMT+0100 (CET)',
          'Mon Nov 03 2025 18:00:00 GMT+0100 (CET)',
          'Mon Dec 01 2025 18:00:00 GMT+0100 (CET)',
        ]
      )
    ),
    // Child
    new UsersMembers(
      'Chloé Simon',
      'child',
      'azul-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Samedi : 11h - 12h30')],

        [
          'Sat Oct 04 2025 11:00:00 GMT+0100 (CET)',
          'Sat Nov 01 2025 11:00:00 GMT+0100 (CET)',
          'Sat Dec 06 2025 11:00:00 GMT+0100 (CET)',
        ]
      )
    ),
    // Teen
    new UsersMembers(
      'Maxime Fabre',
      'teen',
      'azul',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Lundi : 19h30 - 21h'),
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Samedi : 11h - 12h30'),
        ],
        [
          'Mon Oct 06 2025 19:30:00 GMT+0100 (CET)',
          'Sat Oct 11 2025 11:00:00 GMT+0100 (CET)',
          'Mon Oct 20 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 08 2025 11:00:00 GMT+0100 (CET)',
          'Mon Nov 17 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 06 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 15 2025 19:30:00 GMT+0100 (CET)',
        ]
      )
    ),
    // Adult
    new UsersMembers(
      'Sophie Laurent',
      'adult',
      'verde-azul',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Lundi : 19h30 - 21h'),
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Samedi : 11h - 12h30'),
        ],
        [
          'Mon Oct 06 2025 19:30:00 GMT+0100 (CET)',
          'Sat Oct 11 2025 11:00:00 GMT+0100 (CET)',
          'Sat Oct 18 2025 11:00:00 GMT+0100 (CET)',
          'Mon Oct 20 2025 19:30:00 GMT+0100 (CET)',
          'Mon Oct 27 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 01 2025 11:00:00 GMT+0100 (CET)',
          'Sat Nov 08 2025 11:00:00 GMT+0100 (CET)',
          'Mon Nov 03 2025 19:30:00 GMT+0100 (CET)',
          'Mon Nov 17 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 22 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 01 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 06 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 15 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 20 2025 11:00:00 GMT+0100 (CET)',
        ]
      )
    ),
  ]),

  new UsersModel('7', 'student4@brive.fr', 'Password123!', 'student', [
    // Baby
    new UsersMembers(
      'Jean Dupont',
      'baby',
      'cinza-ponta-azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Samedi : 10h - 11h')],
        [
          'Sat Oct 04 2025 10:00:00 GMT+0100 (CET)',
          'Sat Nov 01 2025 10:00:00 GMT+0100 (CET)',
          'Sat Dec 06 2025 10:00:00 GMT+0100 (CET)',
        ]
      )
    ),
    // Child
    new UsersMembers(
      'Marie Bernard',
      'child',
      'verde-amarelo-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Lundi : 18h - 19h')],
        [
          'Mon Oct 06 2025 18:00:00 GMT+0100 (CET)',
          'Mon Oct 20 2025 18:00:00 GMT+0100 (CET)',
          'Mon Nov 17 2025 18:00:00 GMT+0100 (CET)',
          'Mon Dec 01 2025 18:00:00 GMT+0100 (CET)',
        ]
      )
    ),
    // Teen
    new UsersMembers(
      'Nathan Lefevre',
      'teen',
      'amarelo-ponta-azul',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Lundi : 19h30 - 21h'),
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Samedi : 11h - 12h30'),
        ],
        [
          'Mon Oct 06 2025 19:30:00 GMT+0100 (CET)',
          'Sat Oct 11 2025 11:00:00 GMT+0100 (CET)',
          'Mon Oct 20 2025 19:30:00 GMT+0100 (CET)',
          'Sat Oct 25 2025 11:00:00 GMT+0100 (CET)',
          'Mon Nov 03 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 08 2025 11:00:00 GMT+0100 (CET)',
          'Mon Nov 17 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 22 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 01 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 06 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 15 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 20 2025 11:00:00 GMT+0100 (CET)',
        ]
      )
    ),
    // Adult
    new UsersMembers(
      'Sophie Morel',
      'adult',
      'amarelo-azul',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Lundi : 19h30 - 21h'),
          new UserDataCityScheduleModel('Brive-la-Gaillarde', 'Samedi : 11h - 12h30'),
        ],
        [
          'Mon Oct 06 2025 19:30:00 GMT+0100 (CET)',
          'Sat Oct 11 2025 11:00:00 GMT+0100 (CET)',
          'Sat Oct 18 2025 11:00:00 GMT+0100 (CET)',
          'Mon Oct 20 2025 19:30:00 GMT+0100 (CET)',
          'Mon Oct 27 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 01 2025 11:00:00 GMT+0100 (CET)',
          'Sat Nov 08 2025 11:00:00 GMT+0100 (CET)',
          'Mon Nov 03 2025 19:30:00 GMT+0100 (CET)',
          'Mon Nov 17 2025 19:30:00 GMT+0100 (CET)',
          'Sat Nov 22 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 01 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 06 2025 11:00:00 GMT+0100 (CET)',
          'Mon Dec 15 2025 19:30:00 GMT+0100 (CET)',
          'Sat Dec 20 2025 11:00:00 GMT+0100 (CET)',
        ]
      )
    ),
  ]),

  new UsersModel('8', 'student1@chateauneuf.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Paul Martin',
      'child',
      'verde-cinza',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Châteauneuf-la-Forêt', 'Jeudi : 18h30 - 20h'),
          new UserDataCityScheduleModel('Neuvic', 'Mardi : 18h30 - 20h'),
        ],
        ['Thu Oct 09 2025 18:30:00 GMT+0100', 'Thu Nov 13 2025 18:30:00 GMT+0100']
      )
    ),
    new UsersMembers(
      'Lucas Bernard',
      'teen',
      'verde',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Châteauneuf-la-Forêt', 'Jeudi : 18h30 - 20h'),
          new UserDataCityScheduleModel('Neuvic', 'Mardi : 18h30 - 20h'),
        ],
        [
          'Thu Oct 09 2025 18:30:00 GMT+0100',
          'Thu Oct 16 2025 18:30:00 GMT+0100',
          'Thu Oct 23 2025 18:30:00 GMT+0100',
          'Thu Dec 04 2025 18:30:00 GMT+0100',
          'Thu Dec 18 2025 18:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Marc Dupont',
      'adult',
      'verde-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Châteauneuf-la-Forêt', 'Jeudi : 18h30 - 20h')],
        [
          'Thu Oct 16 2025 18:30:00 GMT+0100',
          'Thu Nov 06 2025 18:30:00 GMT+0100',
          'Thu Nov 06 2025 18:30:00 GMT+0100',
          'Thu Nov 13 2025 18:30:00 GMT+0100',
          'Thu Nov 20 2025 18:30:00 GMT+0100',
          'Thu Nov 27 2025 18:30:00 GMT+0100',
          'Thu Dec 11 2025 18:30:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('9', 'student1@couzeix.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Emma Dupont',
      'baby',
      'cinza-ponta-verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Lundi : 17h30 - 18h30')],

        ['Mon Oct 13 2025 17:30:00 GMT+0100']
      )
    ),
    new UsersMembers(
      'Lucas Martin',
      'child',
      'verde-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Lundi : 18h30 - 19h30')],

        ['Mon Nov 10 2025 18:30:00 GMT+0100']
      )
    ),
    new UsersMembers(
      'Hugo Bernard',
      'teen',
      'verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Jeudi : 18h30 - 19h45')],
        [
          'Thu Oct 09 2025 18:30:00 GMT+0100',
          'Thu Nov 13 2025 18:30:00 GMT+0100',
          'Thu Dec 11 2025 18:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Marc Petit',
      'adult',
      'verde-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Lundi : 19h30 - 20h45')],

        [
          'Mon Oct 06 2025 19:30:00 GMT+0100',
          'Mon Nov 03 2025 19:30:00 GMT+0100',
          'Mon Dec 01 2025 19:30:00 GMT+0100',
          'Mon Dec 15 2025 19:30:00 GMT+0100',
          'Mon Dec 22 2025 19:30:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('10', 'student2@couzeix.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Léa Moreau',
      'baby',
      'cinza-ponta-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Lundi : 17h30 - 18h30')],

        [
          'Mon Oct 20 2025 17:30:00 GMT+0100',
          'Mon Nov 24 2025 17:30:00 GMT+0100',
          'Mon Dec 08 2025 17:30:00 GMT+0100',
          'Mon Dec 22 2025 17:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Tom Leroy',
      'child',
      'amarelo-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Jeudi : 17h30 - 18h30')],

        [
          'Thu Oct 16 2025 17:30:00 GMT+0100',
          'Thu Nov 20 2025 17:30:00 GMT+0100',
          'Thu Dec 04 2025 17:30:00 GMT+0100',
          'Thu Dec 18 2025 17:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Nathan Simon',
      'teen',
      'amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Jeudi : 18h30 - 19h45')],

        [
          'Thu Oct 02 2025 18:30:00 GMT+0100',
          'Thu Oct 23 2025 18:30:00 GMT+0100',
          'Thu Nov 06 2025 18:30:00 GMT+0100',
          'Thu Nov 27 2025 18:30:00 GMT+0100',
          'Thu Dec 11 2025 18:30:00 GMT+0100',
          'Thu Dec 18 2025 18:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Claire Bernard',
      'adult',
      'verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Lundi : 19h30 - 20h45')],

        [
          'Mon Oct 13 2025 19:30:00 GMT+0100',
          'Mon Oct 27 2025 19:30:00 GMT+0100',
          'Mon Nov 10 2025 19:30:00 GMT+0100',
          'Mon Nov 24 2025 19:30:00 GMT+0100',
          'Mon Dec 08 2025 19:30:00 GMT+0100',
          'Mon Dec 22 2025 19:30:00 GMT+0100',
          'Mon Dec 29 2025 19:30:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('11', 'student3@couzeix.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Noah Fabre',
      'baby',
      'cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Lundi : 17h30 - 18h30')],

        [
          'Mon Oct 06 2025 17:30:00 GMT+0100',
          'Mon Nov 17 2025 17:30:00 GMT+0100',
          'Mon Dec 08 2025 17:30:00 GMT+0100',
          'Mon Dec 15 2025 17:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Jules Morel',
      'child',
      'verde-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Lundi : 18h30 - 19h30')],

        ['Mon Nov 17 2025 18:30:00 GMT+0100', 'Mon Dec 15 2025 18:30:00 GMT+0100']
      )
    ),
    new UsersMembers(
      'Manon Dupont',
      'teen',
      'verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Jeudi : 18h30 - 19h45')],

        [
          'Thu Nov 06 2025 18:30:00 GMT+0100',
          'Thu Dec 04 2025 18:30:00 GMT+0100',
          'Thu Dec 18 2025 18:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Olivier Martin',
      'adult',
      'amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Lundi : 19h30 - 20h45')],

        [
          'Mon Nov 03 2025 19:30:00 GMT+0100',
          'Mon Dec 01 2025 19:30:00 GMT+0100',
          'Mon Dec 15 2025 19:30:00 GMT+0100',
          'Mon Dec 22 2025 19:30:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('12', 'student4@couzeix.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Anna Simon',
      'baby',
      'cinza-ponta-azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Lundi : 17h30 - 18h30')],

        [
          'Mon Oct 06 2025 17:30:00 GMT+0100',
          'Mon Oct 27 2025 17:30:00 GMT+0100',
          'Mon Nov 17 2025 17:30:00 GMT+0100',
          'Mon Dec 08 2025 17:30:00 GMT+0100',
          'Mon Dec 22 2025 17:30:00 GMT+0100',
          'Mon Dec 29 2025 17:30:00 GMT+0100',
          'Mon Nov 03 2025 17:30:00 GMT+0100',
          'Mon Dec 15 2025 17:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Paul Girard',
      'child',
      'azul-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Jeudi : 17h30 - 18h30')],

        [
          'Thu Oct 09 2025 17:30:00 GMT+0100',
          'Thu Oct 30 2025 17:30:00 GMT+0100',
          'Thu Nov 13 2025 17:30:00 GMT+0100',
          'Thu Nov 27 2025 17:30:00 GMT+0100',
          'Thu Dec 11 2025 17:30:00 GMT+0100',
          'Thu Dec 18 2025 17:30:00 GMT+0100',
          'Thu Dec 04 2025 17:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Élodie Rey',
      'teen',
      'azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Jeudi : 18h30 - 19h45')],

        [
          'Thu Oct 02 2025 18:30:00 GMT+0100',
          'Thu Oct 16 2025 18:30:00 GMT+0100',
          'Thu Oct 30 2025 18:30:00 GMT+0100',
          'Thu Nov 20 2025 18:30:00 GMT+0100',
          'Thu Dec 04 2025 18:30:00 GMT+0100',
          'Thu Dec 18 2025 18:30:00 GMT+0100',
          'Thu Dec 11 2025 18:30:00 GMT+0100',
          'Thu Nov 27 2025 18:30:00 GMT+0100',
          'Thu Nov 06 2025 18:30:00 GMT+0100',
          'Thu Dec 29 2025 18:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Sébastien Laurent',
      'adult',
      'verde-azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Couzeix', 'Lundi : 19h30 - 20h45')],

        [
          'Mon Oct 06 2025 19:30:00 GMT+0100',
          'Mon Oct 13 2025 19:30:00 GMT+0100',
          'Mon Oct 20 2025 19:30:00 GMT+0100',
          'Mon Oct 27 2025 19:30:00 GMT+0100',
          'Mon Nov 03 2025 19:30:00 GMT+0100',
          'Mon Dec 22 2025 19:30:00 GMT+0100',
          'Mon Dec 29 2025 19:30:00 GMT+0100',
          'Mon Nov 27 2025 19:30:00 GMT+0100',
          'Mon Dec 05 2025 19:30:00 GMT+0100',
          'Mon Nov 14 2025 19:30:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('13', 'student1@gueret.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Alice Dubois',
      'baby',
      'cinza-ponta-verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Guéret', 'Mardi : 17h30 - 18h30')],

        ['Tue Oct 07 2025 17:30:00 GMT+0100', 'Tue Nov 04 2025 17:30:00 GMT+0100']
      )
    ),
    new UsersMembers(
      'Baptiste Leroy',
      'child',
      'verde-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Guéret', 'Mardi : 18h30 - 19h30')],

        [
          'Tue Oct 14 2025 18:30:00 GMT+0100',
          'Tue Oct 28 2025 18:30:00 GMT+0100',
          'Tue Nov 11 2025 18:30:00 GMT+0100',
          'Tue Dec 02 2025 18:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Camille Martin',
      'teen',
      'verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Guéret', 'Mardi : 19h30 - 21h')],
        [
          'Tue Oct 07 2025 19:30:00 GMT+0100',
          'Tue Oct 21 2025 19:30:00 GMT+0100',
          'Tue Nov 04 2025 19:30:00 GMT+0100',
          'Tue Nov 18 2025 19:30:00 GMT+0100',
          'Tue Dec 02 2025 19:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'David Petit',
      'adult',
      'verde-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Guéret', 'Mardi : 19h30 - 21h')],

        [
          'Tue Oct 07 2025 19:30:00 GMT+0100',
          'Tue Oct 14 2025 19:30:00 GMT+0100',
          'Tue Oct 21 2025 19:30:00 GMT+0100',
          'Tue Oct 28 2025 19:30:00 GMT+0100',
          'Tue Nov 04 2025 19:30:00 GMT+0100',
          'Tue Nov 11 2025 19:30:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('14', 'student2@gueret.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Émilie Roux',
      'baby',
      'cinza-ponta-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Guéret', 'Mardi : 17h30 - 18h30')],

        [
          'Tue Oct 21 2025 17:30:00 GMT+0100',
          'Tue Nov 18 2025 17:30:00 GMT+0100',
          'Tue Dec 09 2025 17:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Thomas Morel',
      'child',
      'amarelo-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Guéret', 'Mardi : 18h30 - 19h30')],

        [
          'Tue Oct 07 2025 18:30:00 GMT+0100',
          'Tue Oct 28 2025 18:30:00 GMT+0100',
          'Tue Nov 25 2025 18:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Julien Blanc',
      'teen',
      'amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Guéret', 'Mardi : 19h30 - 21h')],

        [
          'Tue Oct 14 2025 19:30:00 GMT+0100',
          'Tue Oct 28 2025 19:30:00 GMT+0100',
          'Tue Nov 11 2025 19:30:00 GMT+0100',
          'Tue Nov 25 2025 19:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Sophie Laurent',
      'adult',
      'verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Guéret', 'Mardi : 19h30 - 21h')],

        [
          'Tue Oct 07 2025 19:30:00 GMT+0100',
          'Tue Oct 14 2025 19:30:00 GMT+0100',
          'Tue Oct 21 2025 19:30:00 GMT+0100',
          'Tue Oct 28 2025 19:30:00 GMT+0100',
          'Tue Nov 04 2025 19:30:00 GMT+0100',
          'Tue Nov 11 2025 19:30:00 GMT+0100',
          'Tue Nov 18 2025 19:30:00 GMT+0100',
          'Tue Dec 02 2025 19:30:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('15', 'student3@gueret.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Lucas Dubois',
      'baby',
      'cinza-ponta-azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Guéret', 'Mardi : 17h30 - 18h30')],

        [
          'Tue Oct 14 2025 17:30:00 GMT+0100',
          'Tue Oct 28 2025 17:30:00 GMT+0100',
          'Tue Nov 11 2025 17:30:00 GMT+0100',
          'Tue Dec 09 2025 17:30:00 GMT+0100',
          'Tue Dec 23 2025 17:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Chloé Martin',
      'child',
      'azul-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Guéret', 'Mardi : 18h30 - 19h30')],

        [
          'Tue Oct 07 2025 18:30:00 GMT+0100',
          'Tue Oct 21 2025 18:30:00 GMT+0100',
          'Tue Nov 04 2025 18:30:00 GMT+0100',
          'Tue Nov 18 2025 18:30:00 GMT+0100',
          'Tue Dec 02 2025 18:30:00 GMT+0100',
          'Tue Dec 16 2025 18:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Maxime Lefevre',
      'teen',
      'azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Guéret', 'Mardi : 19h30 - 21h')],

        [
          'Tue Oct 07 2025 19:30:00 GMT+0100',
          'Tue Oct 21 2025 19:30:00 GMT+0100',
          'Tue Nov 04 2025 19:30:00 GMT+0100',
          'Tue Nov 18 2025 19:30:00 GMT+0100',
          'Tue Dec 02 2025 19:30:00 GMT+0100',
          'Tue Dec 16 2025 19:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Camille Petit',
      'adult',
      'amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Guéret', 'Mardi : 19h30 - 21h')],

        [
          'Tue Oct 14 2025 19:30:00 GMT+0100',
          'Tue Oct 28 2025 19:30:00 GMT+0100',
          'Tue Nov 11 2025 19:30:00 GMT+0100',
          'Tue Nov 25 2025 19:30:00 GMT+0100',
          'Tue Dec 09 2025 19:30:00 GMT+0100',
          'Tue Dec 23 2025 19:30:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('17', 'student1@lasouterraine.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Emma Dubois',
      'baby',
      'cinza-ponta-verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('La Souterraine', 'Samedi : 15h - 16h')],

        [
          'Sat Oct 04 2025 15:00:00 GMT+0100',
          'Sat Oct 18 2025 15:00:00 GMT+0100',
          'Sat Nov 01 2025 15:00:00 GMT+0100',
          'Sat Nov 15 2025 15:00:00 GMT+0100',
          'Sat Nov 29 2025 15:00:00 GMT+0100',
          'Sat Dec 13 2025 15:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Lucas Martin',
      'child',
      'verde-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('La Souterraine', 'Samedi : 16h - 17h30')],

        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
          'Sat Nov 29 2025 16:00:00 GMT+0100',
          'Sat Dec 13 2025 16:00:00 GMT+0100',
          'Sat Dec 27 2025 16:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Manon Lefevre',
      'teen',
      'verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('La Souterraine', 'Samedi : 16h - 17h30')],

        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 11 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Oct 25 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 08 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'David Petit',
      'adult',
      'verde-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('La Souterraine', 'Samedi : 16h - 17h30')],

        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 11 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Oct 25 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 08 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
          'Sat Nov 22 2025 16:00:00 GMT+0100',
          'Sat Nov 29 2025 16:00:00 GMT+0100',
          'Sat Dec 06 2025 16:00:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('18', 'student2@lasouterraine.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Clara Martin',
      'baby',
      'cinza-ponta-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('La Souterraine', 'Samedi : 15h - 16h')],

        [
          'Sat Oct 11 2025 15:00:00 GMT+0100',
          'Sat Oct 25 2025 15:00:00 GMT+0100',
          'Sat Nov 08 2025 15:00:00 GMT+0100',
          'Sat Nov 22 2025 15:00:00 GMT+0100',
          'Sat Dec 06 2025 15:00:00 GMT+0100',
          'Sat Dec 20 2025 15:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Maxime Dubois',
      'child',
      'azul-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('La Souterraine', 'Samedi : 16h - 17h30')],

        [
          'Sat Oct 11 2025 16:00:00 GMT+0100',
          'Sat Oct 25 2025 16:00:00 GMT+0100',
          'Sat Nov 08 2025 16:00:00 GMT+0100',
          'Sat Nov 22 2025 16:00:00 GMT+0100',
          'Sat Dec 06 2025 16:00:00 GMT+0100',
          'Sat Dec 20 2025 16:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Emma Petit',
      'teen',
      'azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('La Souterraine', 'Samedi : 16h - 17h30')],

        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
          'Sat Dec 13 2025 16:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Julien Lefevre',
      'adult',
      'verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('La Souterraine', 'Samedi : 16h - 17h30')],

        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 11 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Oct 25 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 08 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
          'Sat Nov 22 2025 16:00:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('19', 'student1@limoges.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Emma Dubois',
      'baby',
      'cinza-ponta-verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Mercredi : 11h - 12h')],
        [
          'Wed Oct 07 2025 11:00:00 GMT+0100',
          'Wed Oct 21 2025 11:00:00 GMT+0100',
          'Wed Nov 04 2025 11:00:00 GMT+0100',
          'Wed Nov 18 2025 11:00:00 GMT+0100',
          'Wed Dec 02 2025 11:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Lucas Martin',
      'child',
      'verde-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Mardi : 18h - 19h15')],
        [
          'Tue Oct 06 2025 18:00:00 GMT+0100',
          'Tue Oct 20 2025 18:00:00 GMT+0100',
          'Tue Nov 03 2025 18:00:00 GMT+0100',
          'Tue Nov 17 2025 18:00:00 GMT+0100',
          'Tue Dec 01 2025 18:00:00 GMT+0100',
          'Tue Dec 15 2025 18:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Manon Lefevre',
      'teen',
      'verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Mercredi : 17h30 - 19h')],
        [
          'Wed Oct 07 2025 17:30:00 GMT+0100',
          'Wed Oct 14 2025 17:30:00 GMT+0100',
          'Wed Oct 21 2025 17:30:00 GMT+0100',
          'Wed Oct 28 2025 17:30:00 GMT+0100',
          'Wed Nov 04 2025 17:30:00 GMT+0100',
          'Wed Nov 11 2025 17:30:00 GMT+0100',
          'Wed Nov 18 2025 17:30:00 GMT+0100',
          'Wed Nov 25 2025 17:30:00 GMT+0100',
          'Wed Dec 02 2025 17:30:00 GMT+0100',
          'Wed Dec 09 2025 17:30:00 GMT+0100',
          'Wed Dec 16 2025 17:30:00 GMT+0100',
          'Wed Dec 23 2025 17:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'David Petit',
      'adult',
      'verde-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Lundi : 19h30 - 21h')],
        [
          'Mon Oct 06 2025 19:30:00 GMT+0100',
          'Mon Oct 13 2025 19:30:00 GMT+0100',
          'Mon Oct 20 2025 19:30:00 GMT+0100',
          'Mon Oct 27 2025 19:30:00 GMT+0100',
          'Mon Nov 03 2025 19:30:00 GMT+0100',
          'Mon Nov 10 2025 19:30:00 GMT+0100',
          'Mon Nov 17 2025 19:30:00 GMT+0100',
          'Mon Nov 24 2025 19:30:00 GMT+0100',
          'Mon Dec 01 2025 19:30:00 GMT+0100',
          'Mon Dec 08 2025 19:30:00 GMT+0100',
          'Mon Dec 15 2025 19:30:00 GMT+0100',
          'Mon Dec 22 2025 19:30:00 GMT+0100',
          'Mon Dec 29 2025 19:30:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('20', 'student2@limoges.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Clara Martin',
      'baby',
      'cinza-ponta-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Mercredi : 15h - 16h')],
        [
          'Wed Oct 07 2025 15:00:00 GMT+0100',
          'Wed Oct 21 2025 15:00:00 GMT+0100',
          'Wed Nov 04 2025 15:00:00 GMT+0100',
          'Wed Nov 18 2025 15:00:00 GMT+0100',
          'Wed Dec 02 2025 15:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Thomas Morel',
      'child',
      'amarelo-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Mercredi : 16h - 17h15')],
        [
          'Wed Oct 07 2025 16:00:00 GMT+0100',
          'Wed Oct 21 2025 16:00:00 GMT+0100',
          'Wed Nov 04 2025 16:00:00 GMT+0100',
          'Wed Nov 18 2025 16:00:00 GMT+0100',
          'Wed Dec 02 2025 16:00:00 GMT+0100',
          'Wed Dec 16 2025 16:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Julien Blanc',
      'teen',
      'amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Vendredi : 18h - 19h30')],
        [
          'Fri Oct 03 2025 18:00:00 GMT+0100',
          'Fri Oct 10 2025 18:00:00 GMT+0100',
          'Fri Oct 17 2025 18:00:00 GMT+0100',
          'Fri Oct 24 2025 18:00:00 GMT+0100',
          'Fri Oct 31 2025 18:00:00 GMT+0100',
          'Fri Nov 07 2025 18:00:00 GMT+0100',
          'Fri Nov 14 2025 18:00:00 GMT+0100',
          'Fri Nov 21 2025 18:00:00 GMT+0100',
          'Fri Nov 28 2025 18:00:00 GMT+0100',
          'Fri Dec 05 2025 18:00:00 GMT+0100',
          'Fri Dec 12 2025 18:00:00 GMT+0100',
          'Fri Dec 19 2025 18:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Sophie Laurent',
      'adult',
      'verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Mercredi : 19h30 - 21h')],
        [
          'Wed Oct 07 2025 19:30:00 GMT+0100',
          'Wed Oct 14 2025 19:30:00 GMT+0100',
          'Wed Oct 21 2025 19:30:00 GMT+0100',
          'Wed Oct 28 2025 19:30:00 GMT+0100',
          'Wed Nov 04 2025 19:30:00 GMT+0100',
          'Wed Nov 11 2025 19:30:00 GMT+0100',
          'Wed Nov 18 2025 19:30:00 GMT+0100',
          'Wed Nov 25 2025 19:30:00 GMT+0100',
          'Wed Dec 02 2025 19:30:00 GMT+0100',
          'Wed Dec 09 2025 19:30:00 GMT+0100',
          'Wed Dec 16 2025 19:30:00 GMT+0100',
          'Wed Dec 23 2025 19:30:00 GMT+0100',
          'Wed Dec 30 2025 19:30:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('21', 'student3@limoges.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Alice Bernard',
      'baby',
      'cinza-ponta-azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Samedi : 10h - 11h')],
        [
          'Sat Oct 04 2025 10:00:00 GMT+0100',
          'Sat Oct 18 2025 10:00:00 GMT+0100',
          'Sat Nov 01 2025 10:00:00 GMT+0100',
          'Sat Nov 15 2025 10:00:00 GMT+0100',
          'Sat Nov 29 2025 10:00:00 GMT+0100',
          'Sat Dec 13 2025 10:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Pierre Richard',
      'child',
      'azul-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Samedi : 16h - 17h15')],
        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
          'Sat Nov 29 2025 16:00:00 GMT+0100',
          'Sat Dec 13 2025 16:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Lucas Petit',
      'teen',
      'verde-ponta-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Samedi : 11h - 12h30')],
        [
          'Sat Oct 04 2025 11:00:00 GMT+0100',
          'Sat Oct 11 2025 11:00:00 GMT+0100',
          'Sat Oct 18 2025 11:00:00 GMT+0100',
          'Sat Oct 25 2025 11:00:00 GMT+0100',
          'Sat Nov 01 2025 11:00:00 GMT+0100',
          'Sat Nov 08 2025 11:00:00 GMT+0100',
          'Sat Nov 15 2025 11:00:00 GMT+0100',
          'Sat Nov 22 2025 11:00:00 GMT+0100',
          'Sat Nov 29 2025 11:00:00 GMT+0100',
          'Sat Dec 06 2025 11:00:00 GMT+0100',
          'Sat Dec 13 2025 11:00:00 GMT+0100',
          'Sat Dec 20 2025 11:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Marie Lefevre',
      'adult',
      'amarelo-azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Samedi : 11h - 12h30')],
        [
          'Sat Oct 04 2025 11:00:00 GMT+0100',
          'Sat Oct 11 2025 11:00:00 GMT+0100',
          'Sat Oct 18 2025 11:00:00 GMT+0100',
          'Sat Oct 25 2025 11:00:00 GMT+0100',
          'Sat Nov 01 2025 11:00:00 GMT+0100',
          'Sat Nov 08 2025 11:00:00 GMT+0100',
          'Sat Nov 15 2025 11:00:00 GMT+0100',
          'Sat Nov 22 2025 11:00:00 GMT+0100',
          'Sat Nov 29 2025 11:00:00 GMT+0100',
          'Sat Dec 06 2025 11:00:00 GMT+0100',
          'Sat Dec 13 2025 11:00:00 GMT+0100',
          'Sat Dec 20 2025 11:00:00 GMT+0100',
          'Sat Dec 27 2025 11:00:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('22', 'student4@limoges.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Chloe Dubois',
      'baby',
      'cinza-ponta-verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Samedi : 15h - 16h')],
        [
          'Sat Oct 04 2025 15:00:00 GMT+0100',
          'Sat Oct 18 2025 15:00:00 GMT+0100',
          'Sat Nov 01 2025 15:00:00 GMT+0100',
          'Sat Nov 15 2025 15:00:00 GMT+0100',
          'Sat Nov 29 2025 15:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Antoine Laurent',
      'child',
      'verde-amarelo-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Samedi : 11h - 12h30')],
        [
          'Sat Oct 04 2025 11:00:00 GMT+0100',
          'Sat Oct 18 2025 11:00:00 GMT+0100',
          'Sat Nov 01 2025 11:00:00 GMT+0100',
          'Sat Nov 15 2025 11:00:00 GMT+0100',
          'Sat Nov 29 2025 11:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Clément Morel',
      'teen',
      'amarelo-ponta-azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Mercredi : 17h30 - 19h')],
        [
          'Wed Oct 07 2025 17:30:00 GMT+0100',
          'Wed Oct 14 2025 17:30:00 GMT+0100',
          'Wed Oct 21 2025 17:30:00 GMT+0100',
          'Wed Oct 28 2025 17:30:00 GMT+0100',
          'Wed Nov 04 2025 17:30:00 GMT+0100',
          'Wed Nov 11 2025 17:30:00 GMT+0100',
          'Wed Nov 18 2025 17:30:00 GMT+0100',
          'Wed Nov 25 2025 17:30:00 GMT+0100',
          'Wed Dec 02 2025 17:30:00 GMT+0100',
          'Wed Dec 09 2025 17:30:00 GMT+0100',
          'Wed Dec 16 2025 17:30:00 GMT+0100',
          'Wed Dec 23 2025 17:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Julie Petit',
      'adult',
      'verde-azul',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Limoges', 'Vendredi : 19h30 - 21h'),
          new UserDataCityScheduleModel('Limoges', 'Jeudi : 20h15 - 21h30'),
        ],
        [
          'Fri Oct 03 2025 19:30:00 GMT+0100',
          'Thu Oct 09 2025 20:15:00 GMT+0100',
          'Fri Oct 10 2025 19:30:00 GMT+0100',
          'Thu Oct 23 2025 20:15:00 GMT+0100',
          'Fri Oct 24 2025 19:30:00 GMT+0100',
          'Thu Nov 06 2025 20:15:00 GMT+0100',
          'Fri Nov 07 2025 19:30:00 GMT+0100',
          'Thu Nov 20 2025 20:15:00 GMT+0100',
          'Fri Nov 21 2025 19:30:00 GMT+0100',
          'Thu Dec 04 2025 20:15:00 GMT+0100',
          'Fri Dec 05 2025 19:30:00 GMT+0100',
          'Thu Dec 18 2025 20:15:00 GMT+0100',
          'Fri Dec 19 2025 19:30:00 GMT+0100',
          'Fri Dec 26 2025 19:30:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('23', 'student7@limoges.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Nicolas Girard',
      'baby',
      'cinza-ponta-verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Mercredi : 15h - 16h')],
        [
          'Wed Oct 07 2025 15:00:00 GMT+0100',
          'Wed Oct 21 2025 15:00:00 GMT+0100',
          'Wed Nov 04 2025 15:00:00 GMT+0100',
          'Wed Nov 18 2025 15:00:00 GMT+0100',
          'Wed Dec 02 2025 15:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Elodie Mercier',
      'child',
      'verde-azul-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Samedi : 10h - 11h')],
        [
          'Sat Oct 04 2025 10:00:00 GMT+0100',
          'Sat Oct 18 2025 10:00:00 GMT+0100',
          'Sat Nov 01 2025 10:00:00 GMT+0100',
          'Sat Nov 15 2025 10:00:00 GMT+0100',
          'Sat Nov 29 2025 10:00:00 GMT+0100',
          'Sat Dec 13 2025 10:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Antoine Dupont',
      'teen',
      'azul',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Limoges', 'Vendredi : 18h - 19h30'),
          new UserDataCityScheduleModel('Limoges', 'Samedi : 11h - 12h30'),
        ],
        [
          'Fri Oct 03 2025 18:00:00 GMT+0100',
          'Sat Oct 04 2025 11:00:00 GMT+0100',
          'Fri Oct 10 2025 18:00:00 GMT+0100',
          'Sat Oct 11 2025 11:00:00 GMT+0100',
          'Fri Oct 17 2025 18:00:00 GMT+0100',
          'Sat Oct 18 2025 11:00:00 GMT+0100',
          'Fri Oct 24 2025 18:00:00 GMT+0100',
          'Sat Oct 25 2025 11:00:00 GMT+0100',
          'Fri Oct 31 2025 18:00:00 GMT+0100',
          'Sat Nov 01 2025 11:00:00 GMT+0100',
          'Fri Nov 07 2025 18:00:00 GMT+0100',
          'Sat Nov 08 2025 11:00:00 GMT+0100',
          'Fri Nov 14 2025 18:00:00 GMT+0100',
          'Sat Nov 15 2025 11:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Claire Fontaine',
      'adult',
      'amarelo',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Limoges', 'Lundi : 19h30 - 21h'),
          new UserDataCityScheduleModel('Limoges', 'Mercredi : 19h30 - 21h'),
          new UserDataCityScheduleModel('Limoges', 'Jeudi : 20h15 - 21h30'),
        ],
        [
          'Mon Oct 06 2025 19:30:00 GMT+0100',
          'Wed Oct 07 2025 19:30:00 GMT+0100',
          'Thu Oct 09 2025 20:15:00 GMT+0100',
          'Mon Oct 13 2025 19:30:00 GMT+0100',
          'Wed Oct 14 2025 19:30:00 GMT+0100',
          'Thu Oct 16 2025 20:15:00 GMT+0100',
          'Mon Oct 20 2025 19:30:00 GMT+0100',
          'Wed Oct 21 2025 19:30:00 GMT+0100',
          'Thu Oct 23 2025 20:15:00 GMT+0100',
          'Mon Oct 27 2025 19:30:00 GMT+0100',
          'Wed Oct 28 2025 19:30:00 GMT+0100',
          'Thu Oct 30 2025 20:15:00 GMT+0100',
          'Mon Nov 03 2025 19:30:00 GMT+0100',
          'Wed Nov 04 2025 19:30:00 GMT+0100',
          'Thu Nov 06 2025 20:15:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('24', 'student8@limoges.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Léa Simon',
      'baby',
      'cinza-ponta-azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Samedi : 15h - 16h')],
        [
          'Sat Oct 04 2025 15:00:00 GMT+0100',
          'Sat Oct 18 2025 15:00:00 GMT+0100',
          'Sat Nov 01 2025 15:00:00 GMT+0100',
          'Sat Nov 15 2025 15:00:00 GMT+0100',
          'Sat Nov 29 2025 15:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Benoît Lefevre',
      'child',
      'verde-azul-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Limoges', 'Samedi : 16h - 17h15')],
        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
          'Sat Nov 29 2025 16:00:00 GMT+0100',
          'Sat Dec 13 2025 16:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Camille Dubois',
      'teen',
      'verde-azul',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Limoges', 'Mercredi : 17h30 - 19h'),
          new UserDataCityScheduleModel('Limoges', 'Vendredi : 18h - 19h30'),
        ],
        [
          'Wed Oct 07 2025 17:30:00 GMT+0100',
          'Fri Oct 10 2025 18:00:00 GMT+0100',
          'Wed Oct 14 2025 17:30:00 GMT+0100',
          'Fri Oct 17 2025 18:00:00 GMT+0100',
          'Wed Oct 21 2025 17:30:00 GMT+0100',
          'Fri Oct 24 2025 18:00:00 GMT+0100',
          'Wed Oct 28 2025 17:30:00 GMT+0100',
          'Fri Oct 31 2025 18:00:00 GMT+0100',
          'Wed Nov 04 2025 17:30:00 GMT+0100',
          'Fri Nov 07 2025 18:00:00 GMT+0100',
          'Wed Nov 11 2025 17:30:00 GMT+0100',
          'Fri Nov 14 2025 18:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Juliette Martin',
      'adult',
      'verde-amarelo',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Limoges', 'Samedi : 11h - 12h30'),
          new UserDataCityScheduleModel('Limoges', 'Jeudi : 20h15 - 21h30'),
        ],
        [
          'Sat Oct 04 2025 11:00:00 GMT+0100',
          'Thu Oct 09 2025 20:15:00 GMT+0100',
          'Sat Oct 11 2025 11:00:00 GMT+0100',
          'Thu Oct 16 2025 20:15:00 GMT+0100',
          'Sat Oct 18 2025 11:00:00 GMT+0100',
          'Thu Oct 23 2025 20:15:00 GMT+0100',
          'Sat Oct 25 2025 11:00:00 GMT+0100',
          'Thu Oct 30 2025 20:15:00 GMT+0100',
          'Sat Nov 01 2025 11:00:00 GMT+0100',
          'Thu Nov 06 2025 20:15:00 GMT+0100',
          'Sat Nov 08 2025 11:00:00 GMT+0100',
          'Thu Nov 20 2025 20:15:00 GMT+0100',
          'Sat Nov 15 2025 11:00:00 GMT+0100',
          'Thu Dec 04 2025 20:15:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('25', 'student1@neuvic.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Lucas Dubois',
      'child',
      'verde-cinza',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Châteauneuf-la-Forêt', 'Jeudi : 18h30 - 20h'),
          new UserDataCityScheduleModel('Neuvic', 'Mardi : 18h30 - 20h'),
        ],
        [
          'Tue Oct 06 2025 18:30:00 GMT+0100',
          'Tue Oct 20 2025 18:30:00 GMT+0100',
          'Tue Nov 03 2025 18:30:00 GMT+0100',
          'Tue Nov 17 2025 18:30:00 GMT+0100',
          'Tue Dec 01 2025 18:30:00 GMT+0100',
          'Tue Dec 15 2025 18:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Emma Martin',
      'teen',
      'verde-ponta-amarelo',
      new UserDataTrainingModel(
        [
          new UserDataCityScheduleModel('Châteauneuf-la-Forêt', 'Jeudi : 18h30 - 20h'),
          new UserDataCityScheduleModel('Neuvic', 'Mardi : 18h30 - 20h'),
        ],
        [
          'Tue Oct 06 2025 18:30:00 GMT+0100',
          'Tue Oct 13 2025 18:30:00 GMT+0100',
          'Tue Oct 20 2025 18:30:00 GMT+0100',
          'Tue Oct 27 2025 18:30:00 GMT+0100',
          'Tue Nov 03 2025 18:30:00 GMT+0100',
          'Tue Nov 10 2025 18:30:00 GMT+0100',
          'Tue Nov 17 2025 18:30:00 GMT+0100',
          'Tue Nov 24 2025 18:30:00 GMT+0100',
          'Tue Dec 01 2025 18:30:00 GMT+0100',
          'Tue Dec 08 2025 18:30:00 GMT+0100',
          'Tue Dec 15 2025 18:30:00 GMT+0100',
          'Tue Dec 22 2025 18:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'David Petit',
      'adult',
      'verde-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Neuvic', 'Mardi : 18h30 - 20h')],
        [
          'Tue Oct 06 2025 18:30:00 GMT+0100',
          'Tue Oct 13 2025 18:30:00 GMT+0100',
          'Tue Oct 20 2025 18:30:00 GMT+0100',
          'Tue Oct 27 2025 18:30:00 GMT+0100',
          'Tue Nov 03 2025 18:30:00 GMT+0100',
          'Tue Nov 10 2025 18:30:00 GMT+0100',
          'Tue Nov 17 2025 18:30:00 GMT+0100',
          'Tue Nov 24 2025 18:30:00 GMT+0100',
          'Tue Dec 01 2025 18:30:00 GMT+0100',
          'Tue Dec 08 2025 18:30:00 GMT+0100',
          'Tue Dec 15 2025 18:30:00 GMT+0100',
          'Tue Dec 22 2025 18:30:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('26', 'student1@panazol.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Emma Dubois',
      'baby',
      'cinza-ponta-verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Panazol', 'Samedi : 15h - 16h')],

        [
          'Sat Oct 04 2025 15:00:00 GMT+0100',
          'Sat Oct 18 2025 15:00:00 GMT+0100',
          'Sat Nov 01 2025 15:00:00 GMT+0100',
          'Sat Nov 15 2025 15:00:00 GMT+0100',
          'Sat Nov 29 2025 15:00:00 GMT+0100',
          'Sat Dec 13 2025 15:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Lucas Martin',
      'child',
      'verde-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Panazol', 'Samedi : 16h - 17h30')],

        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
          'Sat Nov 29 2025 16:00:00 GMT+0100',
          'Sat Dec 13 2025 16:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Manon Lefevre',
      'teen',
      'verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Panazol', 'Samedi : 16h - 17h30')],

        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 11 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Oct 25 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 08 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
          'Sat Nov 22 2025 16:00:00 GMT+0100',
          'Sat Nov 29 2025 16:00:00 GMT+0100',
          'Sat Dec 06 2025 16:00:00 GMT+0100',
          'Sat Dec 13 2025 16:00:00 GMT+0100',
          'Sat Dec 20 2025 16:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'David Petit',
      'adult',
      'verde-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Panazol', 'Samedi : 16h - 17h30')],

        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 11 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Oct 25 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 08 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
          'Sat Nov 22 2025 16:00:00 GMT+0100',
          'Sat Nov 29 2025 16:00:00 GMT+0100',
          'Sat Dec 06 2025 16:00:00 GMT+0100',
          'Sat Dec 13 2025 16:00:00 GMT+0100',
          'Sat Dec 20 2025 16:00:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('27', 'student2@panazol.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Clara Martin',
      'baby',
      'cinza-ponta-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Panazol', 'Samedi : 15h - 16h')],

        [
          'Sat Oct 04 2025 15:00:00 GMT+0100',
          'Sat Oct 11 2025 15:00:00 GMT+0100',
          'Sat Oct 18 2025 15:00:00 GMT+0100',
          'Sat Oct 25 2025 15:00:00 GMT+0100',
          'Sat Nov 01 2025 15:00:00 GMT+0100',
          'Sat Nov 08 2025 15:00:00 GMT+0100',
          'Sat Nov 15 2025 15:00:00 GMT+0100',
          'Sat Nov 22 2025 15:00:00 GMT+0100',
          'Sat Nov 29 2025 15:00:00 GMT+0100',
          'Sat Dec 06 2025 15:00:00 GMT+0100',
          'Sat Dec 13 2025 15:00:00 GMT+0100',
          'Sat Dec 20 2025 15:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Thomas Morel',
      'child',
      'amarelo-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Panazol', 'Samedi : 16h - 17h30')],

        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 11 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Oct 25 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 08 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
          'Sat Nov 22 2025 16:00:00 GMT+0100',
          'Sat Nov 29 2025 16:00:00 GMT+0100',
          'Sat Dec 06 2025 16:00:00 GMT+0100',
          'Sat Dec 13 2025 16:00:00 GMT+0100',
          'Sat Dec 20 2025 16:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Julien Blanc',
      'teen',
      'azul-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Panazol', 'Samedi : 16h - 17h30')],

        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 11 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Oct 25 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 08 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
          'Sat Nov 22 2025 16:00:00 GMT+0100',
          'Sat Nov 29 2025 16:00:00 GMT+0100',
          'Sat Dec 06 2025 16:00:00 GMT+0100',
          'Sat Dec 13 2025 16:00:00 GMT+0100',
          'Sat Dec 20 2025 16:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Sophie Laurent',
      'adult',
      'verde-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Panazol', 'Samedi : 16h - 17h30')],

        [
          'Sat Oct 04 2025 16:00:00 GMT+0100',
          'Sat Oct 11 2025 16:00:00 GMT+0100',
          'Sat Oct 18 2025 16:00:00 GMT+0100',
          'Sat Oct 25 2025 16:00:00 GMT+0100',
          'Sat Nov 01 2025 16:00:00 GMT+0100',
          'Sat Nov 08 2025 16:00:00 GMT+0100',
          'Sat Nov 15 2025 16:00:00 GMT+0100',
          'Sat Nov 22 2025 16:00:00 GMT+0100',
          'Sat Nov 29 2025 16:00:00 GMT+0100',
          'Sat Dec 06 2025 16:00:00 GMT+0100',
          'Sat Dec 13 2025 16:00:00 GMT+0100',
          'Sat Dec 20 2025 16:00:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('28', 'student1@Saint-Junien.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Lucas Dubois',
      'baby',
      'cinza-ponta-verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Saint-Junien', 'Mercredi : 14h30 - 15h30')],

        ['Wed Oct 07 2025 14:30:00 GMT+0100', 'Wed Nov 04 2025 14:30:00 GMT+0100']
      )
    ),
    new UsersMembers(
      'Emma Martin',
      'child',
      'verde-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Saint-Junien', 'Mercredi : 15h30 - 17h')],

        [
          'Wed Oct 14 2025 15:30:00 GMT+0100',
          'Wed Oct 28 2025 15:30:00 GMT+0100',
          'Wed Nov 11 2025 15:30:00 GMT+0100',
          'Wed Dec 09 2025 15:30:00 GMT+0100',
          'Wed Dec 23 2025 15:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'David Petit',
      'teen',
      'verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Saint-Junien', 'Jeudi : 18h - 19h15')],

        [
          'Thu Oct 09 2025 18:00:00 GMT+0100',
          'Thu Oct 23 2025 18:00:00 GMT+0100',
          'Thu Nov 06 2025 18:00:00 GMT+0100',
          'Thu Nov 20 2025 18:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Claire Fontaine',
      'adult',
      'verde-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Saint-Junien', 'Jeudi : 18h - 19h15')],

        [
          'Thu Oct 02 2025 18:00:00 GMT+0100',
          'Thu Oct 16 2025 18:00:00 GMT+0100',
          'Thu Oct 30 2025 18:00:00 GMT+0100',
          'Thu Nov 13 2025 18:00:00 GMT+0100',
          'Thu Nov 27 2025 18:00:00 GMT+0100',
          'Thu Dec 11 2025 18:00:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('29', 'student2@Saint-Junien.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Alice Bernard',
      'baby',
      'cinza-ponta-verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Panazol', 'Samedi : 16h - 17h30')],

        ['Wed Oct 21 2025 14:30:00 GMT+0100']
      )
    ),
    new UsersMembers(
      'Pierre Richard',
      'child',
      'azul-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Saint-Junien', 'Mercredi : 15h30 - 17h')],

        [
          'Wed Oct 07 2025 15:30:00 GMT+0100',
          'Wed Oct 21 2025 15:30:00 GMT+0100',
          'Wed Nov 04 2025 15:30:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Lucas Petit',
      'teen',
      'verde-ponta-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Saint-Junien', 'Jeudi : 18h - 19h15')],

        [
          'Thu Oct 16 2025 18:00:00 GMT+0100',
          'Thu Oct 30 2025 18:00:00 GMT+0100',
          'Thu Nov 13 2025 18:00:00 GMT+0100',
          'Thu Nov 27 2025 18:00:00 GMT+0100',
          'Thu Dec 11 2025 18:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Marie Lefevre',
      'adult',
      'verde-azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Saint-Junien', 'Jeudi : 18h - 19h15')],

        [
          'Thu Oct 02 2025 18:00:00 GMT+0100',
          'Thu Oct 16 2025 18:00:00 GMT+0100',
          'Thu Oct 30 2025 18:00:00 GMT+0100',
          'Thu Nov 13 2025 18:00:00 GMT+0100',
          'Thu Nov 27 2025 18:00:00 GMT+0100',
          'Thu Dec 11 2025 18:00:00 GMT+0100',
          'Thu Dec 25 2025 18:00:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('30', 'student1@tulle.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Lucas Dubois',
      'baby',
      'cinza-ponta-verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Tulle', 'Samedi : 10h - 11h')],

        [
          'Sat Oct 04 2025 10:00:00 GMT+0100',
          'Sat Nov 01 2025 10:00:00 GMT+0100',
          'Sat Dec 06 2025 10:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Emma Martin',
      'child',
      'verde-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Tulle', 'Samedi : 11h - 12h30')],

        [
          'Sat Oct 11 2025 11:00:00 GMT+0100',
          'Sat Oct 25 2025 11:00:00 GMT+0100',
          'Sat Nov 08 2025 11:00:00 GMT+0100',
          'Sat Nov 22 2025 11:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'David Petit',
      'teen',
      'verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Tulle', 'Samedi : 11h - 12h30')],

        [
          'Sat Oct 04 2025 11:00:00 GMT+0100',
          'Sat Oct 18 2025 11:00:00 GMT+0100',
          'Sat Nov 01 2025 11:00:00 GMT+0100',
          'Sat Nov 15 2025 11:00:00 GMT+0100',
          'Sat Dec 06 2025 11:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Claire Fontaine',
      'adult',
      'verde-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Tulle', 'Samedi : 11h - 12h30')],

        [
          'Sat Oct 04 2025 11:00:00 GMT+0100',
          'Sat Oct 11 2025 11:00:00 GMT+0100',
          'Sat Oct 18 2025 11:00:00 GMT+0100',
          'Sat Oct 25 2025 11:00:00 GMT+0100',
          'Sat Nov 01 2025 11:00:00 GMT+0100',
          'Sat Nov 08 2025 11:00:00 GMT+0100',
          'Sat Nov 15 2025 11:00:00 GMT+0100',
          'Sat Nov 22 2025 11:00:00 GMT+0100',
          'Sat Dec 06 2025 11:00:00 GMT+0100',
          'Sat Dec 13 2025 11:00:00 GMT+0100',
        ]
      )
    ),
  ]),

  new UsersModel('31', 'student2@tulle.fr', 'Password123!', 'student', [
    new UsersMembers(
      'Alice Bernard',
      'baby',
      'cinza-ponta-verde',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Tulle', 'Samedi : 10h - 11h')],

        ['Sat Oct 11 2025 10:00:00 GMT+0100', 'Sat Nov 15 2025 10:00:00 GMT+0100']
      )
    ),
    new UsersMembers(
      'Pierre Richard',
      'child',
      'azul-cinza',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Tulle', 'Samedi : 11h - 12h30')],

        [
          'Sat Oct 04 2025 11:00:00 GMT+0100',
          'Sat Oct 18 2025 11:00:00 GMT+0100',
          'Sat Nov 01 2025 11:00:00 GMT+0100',
          'Sat Nov 15 2025 11:00:00 GMT+0100',
          'Sat Dec 06 2025 11:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Lucas Petit',
      'teen',
      'verde-ponta-amarelo',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Tulle', 'Samedi : 11h - 12h30')],

        [
          'Sat Oct 11 2025 11:00:00 GMT+0100',
          'Sat Oct 25 2025 11:00:00 GMT+0100',
          'Sat Nov 08 2025 11:00:00 GMT+0100',
          'Sat Nov 22 2025 11:00:00 GMT+0100',
          'Sat Dec 13 2025 11:00:00 GMT+0100',
        ]
      )
    ),
    new UsersMembers(
      'Marie Lefevre',
      'adult',
      'verde-azul',
      new UserDataTrainingModel(
        [new UserDataCityScheduleModel('Tulle', 'Samedi : 11h - 12h30')],

        [
          'Sat Oct 04 2025 11:00:00 GMT+0100',
          'Sat Oct 11 2025 11:00:00 GMT+0100',
          'Sat Oct 18 2025 11:00:00 GMT+0100',
          'Sat Oct 25 2025 11:00:00 GMT+0100',
          'Sat Nov 01 2025 11:00:00 GMT+0100',
          'Sat Nov 08 2025 11:00:00 GMT+0100',
          'Sat Nov 15 2025 11:00:00 GMT+0100',
          'Sat Nov 22 2025 11:00:00 GMT+0100',
          'Sat Dec 06 2025 11:00:00 GMT+0100',
          'Sat Dec 13 2025 11:00:00 GMT+0100',
        ]
      )
    ),
  ]),
];
