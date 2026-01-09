import { CityInfo } from '../../core/models/CityInfo.model';
import { TrainingCategory } from '../../core/models/TrainingCategory.model';
import { TrainingSchedule } from '../../core/models/TrainingSchedule.model';

export const CITIES: CityInfo[] = [
  // LIMOGES
  new CityInfo(
    'limoges',
    'Limoges',
    'Capoeira Equilibrio LIMOGES',
    '',
    [45.840058, 1.255751],
    '13, rue du Crucifix',
    87100,
    '06.20.04.61.20',
    '/assets/data-Back-end/places/limoges.webp',
    '2025-08-25',
    [
      new TrainingCategory('0', 'Baby 3/6 ans', [
        new TrainingSchedule('Mercredi', '11h', '12h'),
        new TrainingSchedule('Mercredi', '15h', '16h'),
        new TrainingSchedule('Samedi', '10h', '11h'),
        new TrainingSchedule('Samedi', '15h', '16h'),
      ]),

      new TrainingCategory('1', 'Enfants 7/10 ans', [
        new TrainingSchedule('Mardi', '18h', '19h15'),
        new TrainingSchedule('Mercredi', '16h', '17h15'),
        new TrainingSchedule(
          'Samedi',
          '11h',
          '12h30',
          'Cours mixte, idéal pour une activité en famille !'
        ),
        new TrainingSchedule('Samedi', '16h', '17h15'),
      ]),

      new TrainingCategory('2', 'Ados 11/14 ans', [
        new TrainingSchedule('Mercredi', '17h30', '19h'),
        new TrainingSchedule('Vendredi', '18h', '19h30'),
        new TrainingSchedule(
          'Samedi',
          '11h',
          '12h30',
          'Cours mixte, idéal pour une activité en famille !'
        ),
      ]),

      new TrainingCategory('3', 'À partir de 15 ans (ados et adultes)', [
        new TrainingSchedule('Lundi', '19h30', '21h'),
        new TrainingSchedule('Mercredi', '19h30', '21h'),
        new TrainingSchedule('Jeudi', '20h15', '21h30', 'Capoeira light'),
        new TrainingSchedule('Vendredi', '19h30', '21h'),
        new TrainingSchedule(
          'Samedi',
          '11h',
          '12h30',
          'Cours mixte, idéal pour une activité en famille !'
        ),
      ]),
    ]
  ),

  // Couzeix
  new CityInfo(
    'couzeix',
    'Couzeix',
    'Complexe sportif de Couzeix',
    'Salle n°3 du Complexe Sportif',
    [45.879148836844685, 1.2422976398078234],
    'allée Maurice Genevoix',
    87270,
    '06.20.04.61.20',
    '/assets/data-Back-end/places/couzeix.webp',
    '2025-09-01',
    [
      new TrainingCategory('0', 'Baby 3/6 ans', [new TrainingSchedule('Lundi', '17h30', '18h30')]),

      new TrainingCategory('1', 'Enfants 7/10 ans', [
        new TrainingSchedule('Lundi', '18h30', '19h30'),
        new TrainingSchedule('Jeudi', '17h30', '18h30'),
      ]),

      new TrainingCategory('2', 'Ados', [new TrainingSchedule('Jeudi', '18h30', '19h45')]),

      new TrainingCategory('3', 'Adulte', [new TrainingSchedule('Lundi', '19h30', '20h45')]),
    ]
  ),

  // Panazol
  new CityInfo(
    'panazol',
    'Panazol',
    'Stade de Morpienas',
    'Salle René DADAT, sous les gradins',
    [45.82635199975483, 1.3089892171840223],
    'rue Jean Macé',
    87350,
    '06.20.04.61.20',
    '/assets/data-Back-end/places/panazol.webp',
    '2025-09-13',
    [
      new TrainingCategory('0', 'Baby 3/6 ans', [new TrainingSchedule('Samedi', '15h', '16h')]),

      new TrainingCategory('1', 'Enfants Ados Adulte', [
        new TrainingSchedule('Samedi', '16h', '17h30'),
      ]),
    ]
  ),

  //Saint-Junien
  new CityInfo(
    'st-junien',
    'Saint-Junien',
    'Cité de la danse',
    'Salle Dominique',
    [45.89230728149414, 0.9043357372283936],
    '31 rue Zamenhof',
    87200,
    '06.20.04.61.20',
    '/assets/data-Back-end/places/st-junien.webp',

    '2025-09-03',
    [
      new TrainingCategory('0', 'Baby 3/6 ans', [
        new TrainingSchedule('Mercredi', '14h30', '15h30'),
      ]),

      new TrainingCategory('1', 'Enfants 7/10 ans', [
        new TrainingSchedule('Mercredi', '15h30', '17h'),
      ]),

      new TrainingCategory('2', 'Ados Adulte', [new TrainingSchedule('Jeudi', '18h', '19h15')]),
    ]
  ),

  // Brive
  new CityInfo(
    'brive',
    'Brive-la-Gaillarde',
    'Gymnase Louis Pons',
    '',
    [45.1529148, 1.5355056],
    '24 Bd Brune',
    19100,
    '06.20.04.61.20',
    '/assets/data-Back-end/places/brive.webp',

    '2025-09-01',
    [
      new TrainingCategory('0', 'Baby 3/6 ans', [
        new TrainingSchedule(
          'Lundi',
          '18h',
          '19h',
          'Cours séparés par âge, encadrés par deux enseignants'
        ),
        new TrainingSchedule('Samedi', '10h', '11h'),
      ]),

      new TrainingCategory('1', 'Enfants 7/10 ans', [
        new TrainingSchedule(
          'Lundi',
          '18h',
          '19h',
          'Cours séparés par âge, encadrés par deux enseignants'
        ),
        new TrainingSchedule('Samedi', '11h', '12h30'),
      ]),

      new TrainingCategory('2', 'Ados Adulte', [
        new TrainingSchedule('Lundi', '19h30', '21h'),
        new TrainingSchedule(
          'Samedi',
          '11h',
          '12h30',
          'Cours séparés par âge, encadrés par deux enseignants'
        ),
      ]),
    ]
  ),

  // Tulle
  new CityInfo(
    'tulle',
    'Tulle',
    'Dojo municipal Roger Lager',
    '',
    [45.251515856736226, 1.7636473610962877],
    '5 Rue de la Montane',
    19000,
    '06.20.04.61.20',
    '/assets/data-Back-end/places/tulle.webp',

    '2025-08-30',

    [
      new TrainingCategory('0', 'Baby 3/6 ans', [new TrainingSchedule('Samedi', '10h', '11h')]),

      new TrainingCategory('1', 'Enfants Ados Adulte', [
        new TrainingSchedule(
          'Samedi',
          '11h',
          '12h30',
          'Cours séparés par âge, encadrés par deux enseignants'
        ),
      ]),
    ]
  ),

  // La Souterraine
  new CityInfo(
    'la-souterraine',
    'La Souterraine',
    'Batiment Saint Joseph',
    'Salle de danse, en face de la Mairie',
    [46.238779, 1.482978],
    "1 Rue de l'Hermitage",
    23300,
    '06.20.04.61.20',
    '/assets/data-Back-end/places/la-souterraine.webp',

    '2025-09-06',

    [
      new TrainingCategory('0', 'Baby 3/6 ans', [new TrainingSchedule('Samedi', '15h', '16h')]),

      new TrainingCategory('1', 'Enfants Ados Adulte', [
        new TrainingSchedule('Samedi', '16h', '17h30'),
      ]),
    ]
  ),

  // Gueret
  new CityInfo(
    'gueret',
    'Guéret',
    'Batiment Saint Joseph',
    'Salle de Tennis de Table',
    [46.18625649197039, 1.874588905353769],
    '2 Rue Jean Bussière',
    23000,
    '06.20.04.61.20',
    '/assets/data-Back-end/places/gueret.webp',

    '2025-09-02',
    [
      new TrainingCategory('0', 'Baby 3/6 ans', [new TrainingSchedule('Mardi', '17h30', '18h30')]),

      new TrainingCategory('1', 'Enfants 7/11 ans', [
        new TrainingSchedule('Mardi', '18h30', '19h30'),
      ]),

      new TrainingCategory('2', 'À partir de 15 ans (ados et adultes)', [
        new TrainingSchedule('Mardi', '19h30', '21h'),
      ]),
    ]
  ),

  // Neuvic-Entier
  new CityInfo(
    'neuvic-entier',
    'Neuvic-Entier',
    'Salle polyvalente',
    '',
    [45.723080040043534, 1.6135583524273933],
    '8 Rue de la République',
    87130,
    '06.69.44.23.55',
    '/assets/data-Back-end/places/neuvic-entier.webp',

    '2025-09-09',
    [
      new TrainingCategory('0', 'À partir de 6 ans (enfants, ados et adultes)', [
        new TrainingSchedule('Mardi', '18h30', '20h'),
      ]),
    ]
  ),

  // Châteauneuf-la-Forêt
  new CityInfo(
    'chateauneuf-la-foret',
    'Châteauneuf-la-Forêt',
    'Salle polyvalente',
    '',
    [45.71436400367958, 1.6019259092543154],
    '25 Av. Michel Sinibaldi',
    87130,
    '06.69.44.23.55',
    '/assets/data-Back-end/places/chateauneuf-la-foret.webp',
    '2025-09-11',
    [
      new TrainingCategory('0', 'À partir de 6 ans (enfants, ados et adultes)', [
        new TrainingSchedule('Jeudi', '18h30', '20h'),
      ]),
    ]
  ),
];
