import { UsersDataLinkModel } from './../models/UserData-link.model';
import { UsersDataModel } from '../models/UserData.model';
import { UserDataContentModel } from '../models/UserData-content.model';
import { UsersDataPdfModel } from '../models/UserData-pdf.model';

export const dashboardUserData: UsersDataModel[] = [
  // Presentation
  new UsersDataModel('presentation', 'Présentation', [
    new UserDataContentModel('Retour sur 20 ans de parcours d’Équilibrio en France', 'all', [
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/gM0Bwb5oIE0'),
    ]),

    new UserDataContentModel('A la découverte du Brésil', 'Enfants', [
      new UsersDataPdfModel(
        'pdf',
        'all',
        'le-brésil-pour-les-enfants',
        '/assets/data-Back-end/pdf/le-brésil-pour-les-enfants/le-brésil-pour-les-enfants.webp',
        '/assets/data-Back-end/pdf/le-brésil-pour-les-enfants/le-brésil-pour-les-enfants.pdf'
      ),
    ]),
  ]),

  // TRAINING
  new UsersDataModel('entrainement', 'Entraînement', [
    // Children
    new UserDataContentModel('Mon entraînement', 'Enfants', [
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/H8f1g7CEceU'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/0CJ3IjptZOA'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/Zwx5s2YF2ck'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/l7xFO2VKazs'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/UqQKg5--OYA'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/OMiFPptZNFw'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/jwR9dkMR2Uk'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/QDtgPbKhNfU'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/E3z-4CMeidc'),
    ]),

    new UserDataContentModel('À faire ensemble', 'Enfants', [
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/savVW1ays98'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/57e-dFR6usQ'),
    ]),

    // Adults
    new UserDataContentModel('Général', 'Adultes', [
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/807kBX-rK6s'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/_X0K8--xohQ'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/VW3f9aOJaJE'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/ATSjvzobFk4'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/uJM3gUjioWU'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/PQeNptN5bY0'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/UQn2DJAfQw0'),
    ]),

    new UserDataContentModel('Préparation physique', 'Adultes', [
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/WwzYnNgWOjI'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/ifMgrQ7xHlY'),
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/_w1kBXCQm-Q'),
    ]),

    new UserDataContentModel('Assouplissement', 'Adultes', [
      new UsersDataLinkModel('video', 'all', 'https://www.youtube.com/embed/vQlfDsnnSmE'),
    ]),
  ]),

  // EXAM SHEETS
  new UsersDataModel('fiches-examen', 'Fiches d’examen', [
    // Children
    new UserDataContentModel('Toutes les fiches', 'Enfants', [
      new UsersDataPdfModel(
        'pdf',
        'novato',
        'verde-cinza',
        '/assets/data-Back-end/pdf/exam-sheets/children/verde-cinza/verde-cinza.webp',
        '/assets/data-Back-end/pdf/exam-sheets/children/verde-cinza/verde-cinza.pdf'
      ),

      new UsersDataPdfModel(
        'pdf',
        'verde-cinza',
        'amarelo-cinza',
        '/assets/data-Back-end/pdf/exam-sheets/children/amarelo-cinza/amarelo-cinza.webp',
        '/assets/data-Back-end/pdf/exam-sheets/children/amarelo-cinza/amarelo-cinza.pdf'
      ),

      new UsersDataPdfModel(
        'pdf',
        'amarelo-cinza',
        'azul-cinza',
        '/assets/data-Back-end/pdf/exam-sheets/children/azul-cinza/azul-cinza.webp',
        '/assets/data-Back-end/pdf/exam-sheets/children/azul-cinza/azul-cinza.pdf'
      ),

      new UsersDataPdfModel(
        'pdf',
        'azul-cinza',
        'verde-amarelo-cinza',
        '/assets/data-Back-end/pdf/exam-sheets/children/verde-amarelo-cinza/verde-amarelo-cinza.webp',
        '/assets/data-Back-end/pdf/exam-sheets/children/verde-amarelo-cinza/verde-amarelo-cinza.pdf'
      ),

      new UsersDataPdfModel(
        'pdf',
        'verde-amarelo-cinza',
        'verde-azul-cinza',
        '/assets/data-Back-end/pdf/exam-sheets/children/verde-azul-cinza/verde-azul-cinza.webp',
        '/assets/data-Back-end/pdf/exam-sheets/children/verde-azul-cinza/verde-azul-cinza.pdf'
      ),

      new UsersDataPdfModel(
        'pdf',
        'verde-azul-cinza',
        'amarelo-azul-cinza',
        '/assets/data-Back-end/pdf/exam-sheets/children/amarelo-azul-cinza/amarelo-azul-cinza.webp',
        '/assets/data-Back-end/pdf/exam-sheets/children/amarelo-azul-cinza/amarelo-azul-cinza.pdf'
      ),
    ]),

    // Adults
    new UserDataContentModel('Toutes les fiches', 'Adultes', [
      new UsersDataPdfModel(
        'pdf',
        'novato',
        'verde',
        '/assets/data-Back-end/pdf/exam-sheets/adults/verde/verde.webp',
        '/assets/data-Back-end/pdf/exam-sheets/adults/verde/verde.pdf'
      ),

      new UsersDataPdfModel(
        'pdf',
        'verde',
        'verde-ponta-amarelo',
        '/assets/data-Back-end/pdf/exam-sheets/adults/verde-ponta-amarelo/verde-ponta-amarelo.webp',
        '/assets/data-Back-end/pdf/exam-sheets/adults/verde-ponta-amarelo/verde-ponta-amarelo.pdf'
      ),

      new UsersDataPdfModel(
        'pdf',
        'verde-ponta-amarelo',
        'amarelo',
        '/assets/data-Back-end/pdf/exam-sheets/adults/amarelo/amarelo.webp',
        '/assets/data-Back-end/pdf/exam-sheets/adults/amarelo/amarelo.pdf'
      ),

      new UsersDataPdfModel(
        'pdf',
        'amarelo',
        'amarelo-ponta-azul',
        '/assets/data-Back-end/pdf/exam-sheets/adults/amarelo-ponta-azul/amarelo-ponta-azul.webp',
        '/assets/data-Back-end/pdf/exam-sheets/adults/amarelo-ponta-azul/amarelo-ponta-azul.pdf'
      ),

      new UsersDataPdfModel(
        'pdf',
        'amarelo-ponta-azul',
        'azul',
        '/assets/data-Back-end/pdf/exam-sheets/adults/azul/azul.webp',
        '/assets/data-Back-end/pdf/exam-sheets/adults/azul/azul.pdf'
      ),

      new UsersDataPdfModel(
        'pdf',
        'azul',
        'verde-amarelo',
        '/assets/data-Back-end/pdf/exam-sheets/adults/verde-amarelo/verde-amarelo.webp',
        '/assets/data-Back-end/pdf/exam-sheets/adults/verde-amarelo/verde-amarelo.pdf'
      ),

      new UsersDataPdfModel(
        'pdf',
        'verde-amarelo',
        'verde-azul',
        '/assets/data-Back-end/pdf/exam-sheets/adults/verde-azul/verde-azul.webp',
        '/assets/data-Back-end/pdf/exam-sheets/adults/verde-azul/verde-azul.pdf'
      ),

      new UsersDataPdfModel(
        'pdf',
        'verde-azul',
        'amarelo-azul',
        '/assets/data-Back-end/pdf/exam-sheets/adults/amarelo-azul/amarelo-azul.webp',
        '/assets/data-Back-end/pdf/exam-sheets/adults/amarelo-azul/amarelo-azul.pdf'
      ),
    ]),
  ]),

  // Mouvements
  new UsersDataModel('mouvements', 'Mouvement', [
    // Children
    new UserDataContentModel('Tous les mouvements', 'Enfants', [
      new UsersDataLinkModel('video', 'novato', 'https://www.youtube.com/embed/VhLv_HBus2Y'),
      new UsersDataLinkModel('video', 'verde-cinza', 'https://www.youtube.com/embed/VhLv_HBus2Y'),
      new UsersDataLinkModel('video', 'amarelo-cinza', 'https://www.youtube.com/embed/VhLv_HBus2Y'),
      new UsersDataLinkModel('video', 'azul-cinza', 'https://www.youtube.com/embed/NjbC-UCWmQ8'),
      new UsersDataLinkModel(
        'video',
        'verde-amarelo-cinza',
        'https://www.youtube.com/embed/NjbC-UCWmQ8'
      ),
      new UsersDataLinkModel(
        'video',
        'verde-azul-cinza',
        'https://www.youtube.com/embed/NjbC-UCWmQ8'
      ),
    ]),

    // Adults
    new UserDataContentModel('Séquences', 'Adultes', [
      new UsersDataLinkModel('video', 'verde', 'https://www.youtube.com/embed/k2hNl6QkpOI'),
      new UsersDataLinkModel('video', 'amarelo', 'https://www.youtube.com/embed/k7pCJYy7cnw'),
      new UsersDataLinkModel(
        'video',
        'amarelo-ponta-azul',
        'https://www.youtube.com/embed/vc1KL4cTIFc'
      ),
      new UsersDataLinkModel('video', 'azul', 'https://www.youtube.com/embed/0-0-CNd_rKM'),
    ]),

    new UserDataContentModel('Mouvements', 'Adultes', [
      new UsersDataLinkModel('video', 'verde-amarelo', 'https://www.youtube.com/embed/xsmBsAzjHZg'),
    ]),
  ]),
];
