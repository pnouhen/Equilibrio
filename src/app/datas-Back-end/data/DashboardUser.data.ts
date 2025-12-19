import { UsersDataLinkModel } from './../models/UserData-link.model';
import { UsersDataModel } from '../models/UserData.model';
import { UserDataContentModel } from '../models/UserData-content.model';
import { UsersDataPdfModel } from '../models/UserData-pdf.model';
import { UsersDataSongModel } from '../models/UsersData-song.model';

export const dashboardUserData: UsersDataModel[] = [
  // Presentation
  new UsersDataModel('presentation', 'Présentation', [
    new UserDataContentModel('Retour sur 20 ans de parcours d’Équilibrio en France', '', 'all', [
      new UsersDataLinkModel(
        'video',
        'Les 20 ans du groupe équilibrio en France',
        'all',
        'https://www.youtube.com/embed/gM0Bwb5oIE0'
      ),
    ]),

    new UserDataContentModel('A la découverte du Brésil', '', 'Enfants', [
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
    new UserDataContentModel('Mon entraînement', '', 'Enfants', [
      new UsersDataLinkModel(
        'video',
        'Entraînement 1',
        'all',
        'https://www.youtube.com/embed/H8f1g7CEceU'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 2',
        'all',
        'https://www.youtube.com/embed/0CJ3IjptZOA'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 3',
        'all',
        'https://www.youtube.com/embed/Zwx5s2YF2ck'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 4',
        'all',
        'https://www.youtube.com/embed/l7xFO2VKazs'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 5',
        'all',
        'https://www.youtube.com/embed/UqQKg5--OYA'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 6',
        'all',
        'https://www.youtube.com/embed/OMiFPptZNFw'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 7',
        'all',
        'https://www.youtube.com/embed/jwR9dkMR2Uk'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 8',
        'all',
        'https://www.youtube.com/embed/QDtgPbKhNfU'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 9',
        'all',
        'https://www.youtube.com/embed/E3z-4CMeidc'
      ),
    ]),

    new UserDataContentModel('À faire ensemble', '', 'Enfants', [
      new UsersDataLinkModel(
        'video',
        'Entraînement mixte 1',
        'all',
        'https://www.youtube.com/embed/savVW1ays98'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement mixte 2',
        'all',
        'https://www.youtube.com/embed/57e-dFR6usQ'
      ),
    ]),

    // Adults
    new UserDataContentModel('Général', '', 'Adultes', [
      new UsersDataLinkModel(
        'video',
        'Entraînement 1',
        'all',
        'https://www.youtube.com/embed/807kBX-rK6s'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 2',
        'all',
        'https://www.youtube.com/embed/_X0K8--xohQ'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 3',
        'all',
        'https://www.youtube.com/embed/VW3f9aOJaJE'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 4',
        'all',
        'https://www.youtube.com/embed/ATSjvzobFk4'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 5',
        'all',
        'https://www.youtube.com/embed/uJM3gUjioWU'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 6',
        'all',
        'https://www.youtube.com/embed/PQeNptN5bY0'
      ),
      new UsersDataLinkModel(
        'video',
        'Entraînement 7',
        'all',
        'https://www.youtube.com/embed/UQn2DJAfQw0'
      ),
    ]),

    new UserDataContentModel('Préparation physique', '', 'Adultes', [
      new UsersDataLinkModel(
        'video',
        'Préparation physique 1',
        'all',
        'https://www.youtube.com/embed/WwzYnNgWOjI'
      ),
      new UsersDataLinkModel(
        'video',
        'Préparation physique 2',
        'all',
        'https://www.youtube.com/embed/ifMgrQ7xHlY'
      ),
      new UsersDataLinkModel(
        'video',
        'Préparation physique 3',
        'all',
        'https://www.youtube.com/embed/_w1kBXCQm-Q'
      ),
    ]),

    new UserDataContentModel('Assouplissement', '', 'Adultes', [
      new UsersDataLinkModel(
        'video',
        'Exercices d’assouplissement',
        'all',
        'https://www.youtube.com/embed/vQlfDsnnSmE'
      ),
    ]),
  ]),

  // EXAM SHEETS
  new UsersDataModel('fiches-examen', 'Fiches d’examen', [
    // Children
    new UserDataContentModel('Toutes les fiches', '', 'Enfants', [
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
    new UserDataContentModel('Toutes les fiches', '', 'Adultes', [
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
    new UserDataContentModel('Tous les mouvements', '', 'Enfants', [
      new UsersDataLinkModel(
        'video',
        'Séquences des trois premières cordes',
        'novato verde-cinza amarelo-cinza',
        'https://www.youtube.com/embed/VhLv_HBus2Y'
      ),
      new UsersDataLinkModel(
        'video',
        'Séquences des trois dernières cordes',
        'azul-cinza verde-amarelo-cinza verde-azul-cinza',
        'https://www.youtube.com/embed/NjbC-UCWmQ8'
      ),
    ]),

    // Adults
    new UserDataContentModel('Séquences', '', 'Adultes', [
      new UsersDataLinkModel(
        'video',
        'Séquence verde-ponta-amarelo',
        'verde',
        'https://www.youtube.com/embed/k2hNl6QkpOI'
      ),
      new UsersDataLinkModel(
        'video',
        'Séquence amarelo-ponta-azul',
        'amarelo',
        'https://www.youtube.com/embed/k7pCJYy7cnw'
      ),
      new UsersDataLinkModel(
        'video',
        'Séquence azul',
        'amarelo-ponta-azul',
        'https://www.youtube.com/embed/vc1KL4cTIFc'
      ),
      new UsersDataLinkModel(
        'video',
        'Séquence verde-amarelo',
        'azul',
        'https://www.youtube.com/embed/0-0-CNd_rKM'
      ),
    ]),

    new UserDataContentModel('Mouvements', '', 'Adultes', [
      new UsersDataLinkModel(
        'video',
        'Aú espinha',
        'verde-amarelo',
        'https://www.youtube.com/embed/xsmBsAzjHZg'
      ),
    ]),
  ]),

  // Instruments
  new UsersDataModel('instruments', 'Instruments', [
    // Pandeiro
    new UserDataContentModel('Pandeiro', '', 'Adultes', [
      new UsersDataLinkModel(
        'video',
        'Pandeiro',
        'verde',
        'https://www.youtube.com/embed/FCy3B8PJBPQ'
      ),
    ]),

    // Atabaque
    new UserDataContentModel('Atabaque', '', 'Adultes', [
      new UsersDataLinkModel(
        'video',
        'Atabaque',
        'verde',
        'https://www.youtube.com/embed/xmrjJ3WIvkM'
      ),
      new UsersDataLinkModel(
        'video',
        'Atabaque 2',
        'verde',
        'https://www.youtube.com/embed/PIo8xVxNBjU'
      ),
    ]),

    // Berimbau
    new UserDataContentModel('Berimbau', '', 'Adultes', [
      new UsersDataLinkModel(
        'video',
        'Angola',
        'amarelo',
        'https://www.youtube.com/embed/Y7o2iCHmlKs'
      ),
      new UsersDataLinkModel(
        'video',
        'São Bento Grande',
        'amarelo',
        'https://www.youtube.com/embed/VPldyPdytcE'
      ),
      new UsersDataLinkModel(
        'video',
        'São Bento Pequeno',
        'amarelo',
        'https://www.youtube.com/embed/3rdk8ZRE8s8'
      ),
      new UsersDataLinkModel(
        'video',
        'São Bento Grande Regional',
        'azul',
        'https://www.youtube.com/embed/c6dqBaiYO1w'
      ),
      new UsersDataLinkModel(
        'video',
        'Banguela',
        'azul',
        'https://www.youtube.com/embed/b41l3N_62dQ'
      ),
      new UsersDataLinkModel(
        'video',
        'Cavaleria',
        'azul',
        'https://www.youtube.com/embed/UOdD1bM9Uxw'
      ),
      new UsersDataLinkModel(
        'video',
        'Idaliana',
        'verde-amarelo',
        'https://www.youtube.com/embed/FQGFdIH1Ojc'
      ),
      new UsersDataLinkModel(
        'video',
        'Apanha laranja no chão tico-tico + Hino',
        'verde-amarelo',
        'https://www.youtube.com/embed/lpRcWFffTRk'
      ),
      new UsersDataLinkModel(
        'video',
        'Iuna',
        'verde-azul',
        'https://www.youtube.com/embed/t92riprqLNM'
      ),
      new UsersDataLinkModel(
        'video',
        'Amazonas',
        'verde-azul',
        'https://www.youtube.com/embed/7VNsp_db1tc'
      ),
      new UsersDataLinkModel(
        'video',
        'Samba de Roda',
        'verde-azul',
        'https://www.youtube.com/embed/aNNkgJecEf8'
      ),
    ]),
  ]),

  // Instruments
  new UsersDataModel('chants', 'Chants', [
    // Ladainha
    new UserDataContentModel(
      'Ladainha',
      "La ladainha, est la chanson qui débute la 'roda' traditionnelle. C'est une histoire ou un hommage.",
      'Adultes',
      [
        new UsersDataSongModel(
          'song',
          'all',
          'Discordar-e-um-direito',
          'Discordar é um direito',
          'Mestre Pernalonga',
          'Mestre Pernalonga',
          `Discordar é um direito<br>Discordar é um direito, colega véio<br>É um direito que você tem<br><br>Discordar é um direito, colega véio<br>É um direito que você tem<br>Agora pra me conhecer, colega véio<br>Olha tem que ser de perto<br><br>Eu sou um homem honesto<br>E também trabalhador<br><br>Eu sou um homem honesto, colega véio<br>E também trabalhador<br>As coisas que te falaram<br>É mentira, meu senhor<br><br>As coisas que te falaram, colega véio<br>E você acreditou, camaradinha<br><br>Viva meu Deus!<br>Iê viva meu mestre!<br>Ê quem me ensinou<br>Ê na capoeira<br>Ê na malandragem<br>Ê volta do mundo<br>Ê que o mundo deu<br>Ê que o mundo dá`,
          '/assets/data-Back-end/songs/discordar.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Toda-bahia-chorou',
          'Toda bahia chorou',
          'Mestre Boa Voz',
          'Mestre Boa Voz',
          `Toda Bahia chorouToda Bahia chorou<br>No dia em que a capoeira Angola<br>Perdeu seu protetor<br><br>Mestre Pastinha foi embora<br>Oxalá quem o levou<br>Lá pras terras de Aruanda<br>Mas ninguém se conformou<br><br>Chorou general, menino<br>Chorou mocinha, doutor<br>Pretas velhas, feiticeiros<br>Ogãs e Babalôs<br><br> Berimbau tocou iúna<br>Num toque triste de morte<br>E a capoeira foi jogada<br>Ao som da triste canção<br><br>Da boca do mandingueiro<br>De dentro do coração<br>E não houve na Bahia<br>Quem não cantasse esse refrão<br><br>Iê vai lá menino<br>Mostra o que o mestre ensinou<br>Mostra que arrancaram a planta<br>Mas a semente brotou<br>E se for bem cultivada<br>Dará bom fruto e bela flor`,
          '/assets/data-Back-end/songs/bahiachorou.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Dente-de-ouro',
          'Dente de ouro',
          'Domaine public',
          'Mestre Waldemar da Liberdade',
          `Iê….<br>Ela tem um dente de ouro<br>Ela tem um dente de ouro, ô meu bem<br>Foi eu quem mandei botar<br>Eu vou rogar uma praga<br>Pro dente se quebrar<br>Dela eu não me alembro, ô meu bem<br>E não quero me alembrar<br>Das horas amargurada, ô iaiá<br>Com ela eu conversava<br>Na beira de uma praia<br>É um bonito luar<br>Ela sempre me jurando, ô meu bem<br>Que a outro não amava<br>Vim da Ilha de Maré<br>Jogar em Santa Rita<br>Duas coisas nesse mundo<br>Que meu o coração palpita<br>É um berimbau vozeiro<br>E uma moça bonita<br>Camaradinho… Aquinderreis<br><br>Iê, aquinderreis, camará<br>Vamo-nos embora<br>Iê, vamos embora, camará<br>Pela barra afora<br>Iê, pela barra afora, camará<br>Rio de Janeiro<br>Iê, Rio de Janeiro, camará`,
          '/assets/data-Back-end/songs/dente.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Minha-fe-em-deus',
          'Minha fé em deus',
          'Mestre Sombra',
          'Mestre Sombra',
          `Minha fé em Deus é grande - 2x<br>É grande como o universo<br>Na roda da capoeira<br>Proteção a Deus eu peço<br><br>Na corda do berimbau - 2x<br>O meu nome eu vou falar<br>Eu me chamo o passado<br>De um futuro bem presente<br><br>Viva Deus la nas alturas<br>E a capoeira para gente, camaradinha…<br><br>Iê viva meu Deus<br>Iê viva meu mestre<br>Iê quem me ensinou<br>Iê a capoeira<br>Iê vamos embora`,
          '/assets/data-Back-end/songs/minhafe.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Vou-falar-a-minha-mae',
          'Vou falar a minha mãe',
          'Mestre Deraldo',
          'Mestre Deraldo',
          `Vou falar a minha mãe<br>Ai meu Deus que faço eu<br>Eu nasci pra capoeira<br>Não sei como aconteceu<br>Ela então me respondeu<br>Seja o que Deus quiser<br><br>O destino é Deus que manda<br>Não é como a gente quer<br>Vou me embora, vou me embora<br>Vou me embora pra Bahia<br>Pra terra da capoeira<br>Ela é a minha vida<br><br>Iê viva Bahia...,<br>São Salvador... ,<br>Viva São Paulo... ,<br>Rio de Janeiro...`,
          '/assets/data-Back-end/songs/ladainha1.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Eu-ja-vivo-enjoado',
          'Eu já vivo enjoado',
          'Mestre Pastinha',
          'Carolina Soares',
          `Eu já vivo enjoado,<br>De viver aqui na terra,<br>Oh mamãe eu vou pra lua,<br>Falei com minha mulher,<br>Ela então me respondeu,<br>Nós vamos se Deus quiser,<br>Vamos fazer um ranchinho,<br>Todo feito de sapé,<br>Amanhã ás 7:00 horas,<br>Nós vamos tomar café,<br>E eu que nunca acreditei,<br>Não posso me conformar,<br>Que a lua venha a terra,<br>Que a terra venha o luar,<br>Tudo isso é conversa,<br>Pra comer sem trabalhar,<br>O senhor amigo meu,<br>Escute o meu cantar,<br>Quem é dono não se enciuma,<br>quem não é quer enciumar…<br><br>É hora é hora <br>Iê vamos embora<br>Pela barra fora<br>Iê viva meu Deus<br>Iê viva meu Mestre…`,
          '/assets/data-Back-end/songs/enjoado.mp3'
        ),
      ]
    ),

    // Chansons classiques
    new UserDataContentModel(
      'Chansons classiques',
      'Ce sont également des corridos, plus connus, et fréquemment chantés dans les rondes.',
      'Adultes',
      [
        new UsersDataSongModel(
          'song',
          'all',
          'A-manteiga-derramou',
          'A manteiga derramou',
          'Domaine public',
          'Mestre Pernalonga',
          `Vou dizer a meu sinhô<br>Que a manteiga derramou<br>E a manteiga não é minha<br>E a manteiga é de ioiô<br><br>Vou dizer a meu sinhô<br>Que a manteiga derramou<br><br>E a manteiga não é minha<br>E a manteiga é de ioiô<br><br>Refrain<br><br>E a manteiga não é minha<br>E a manteiga é de ioiô<br><br>Refrain<br><br>A manteiga é do patrão<br>Caiu no chão e derramou<br><br>Refrain<br><br>A manteiga não é minha<br>É pra filha de ioiô`,
          '/assets/data-Back-end/songs/manteiga.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Santo-Antonio-eu-quero-agua',
          'Santo Antônio eu quero água',
          'Instrutor Padoka',
          'Instrutor Padoka',
          `Santo Antônio eu quero água<br><strong>Santo Antônio eu quero água</strong><br><br>Santo Antônio eu quero água<br><strong>Santo Antônio eu quero água</strong><br><br>Quero água pra beber<br>Quero água pra lavar<br>Quero água pra benzer<br>Quero água<br><br><strong><br>Quero água pra beber<br>Quero água pra lavar<br>Quero água pra benzer<br>Quero água</strong>`,
          '/assets/data-Back-end/songs/santoantonio.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Areia',
          'Areia',
          'Domaine public',
          'Mestre Eduardo STORTI',
          `Abre meu caminho<br><strong>Areia</strong><br><br>Que eu quero passar<br><strong>Areia</strong><br><br>Sou pequenininho<br><strong>Areia</strong><br><br>Filho de Iemanjá<br><strong>Areia</strong><br><br>Areia do rio<br><strong>Areia</strong><br><br>Areia do mar<br><strong>Areia</strong><br><br>Mas o areia….o areia…<br><strong>o areia….o areia…</strong>`,
          '/assets/data-Back-end/songs/areia.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Paranaue',
          'Paranauê',
          'Domaine public',
          'Mestre Eduardo STORTI',
          `Vou dizer minha mulher, Paraná<br>Capoeira me venceu, Paraná<br><br>refrain:<br>Paranauê, paranauê, Paraná<br>Paranauê, paranauê, Paraná<br><br>Ela quis bater pé firme, paraná<br>Isto não me aconteceu paraná<br><br>refrain:<br><br>Vou me embora vou me embora,<br>Como já disse que vou, Paraná<br><br>refrain:<br><br>Eu aqui não sou querido<br>Mas na minha terra eu sou, Paraná<br><br>refrain :<br><br>Paraná, Paranauê<br>Paraná, Paraná Paranaguá Paraná<br><br>refrain:`,
          '/assets/data-Back-end/songs/Paranauê.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Quem-vem-la-sou-eu',
          'Quem vem lá sou eu',
          'Domaine public',
          'Mestre Eduardo STORTI',
          `Quem vem la sou eu<br>Quem vem la sou eu<br>Berimbau bateu<br>Capoeira sou eu<br><br>Refrain<br><br>Quem vem la sou eu<br><br>Quem vem la sou eu<br>Berimbau bateu<br>Capoeira sou eu<br><br>Refrain<br><br>Eu venho de longe<br>Venho do outro lado <br>Jogo capoeira<br>Viva eu e Mestre Eduardo<br><br>Refrain<br><br>Mas sou eu, sou eu <br>Refrain : Quem vem la<br>Mas sou eu também sou<br>Refrain : Quem vem la<br>A cancela bateu<br>Refrain : Quem vem la<br>Capoeira sou eu <br>Refrain : Quem vem la`,
          '/assets/data-Back-end/songs/quemvemla.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Vim-da-bahia-pra-lhe-ver',
          'Vim da bahia pra lhe ver',
          'Domaine public',
          'Mestre Eduardo STORTI',
          `Vim da Bahia pra lhe ver<br>Vim da Bahia pra lhe ver<br>Vim da Bahia pra lhe ver<br>Pra lhe ver, pra lhe ver<br>Pra lhe ver, pra lhe ver<br><br>Refrain<br><br>Vim da Bahia pra lhe ver<br>Vim da Bahia pra lhe ver<br>Vim da Bahia pra lhe ver<br>Pra lhe ver, pra lhe ver<br>Pra lhe ver, pra lhe ver<br><br>Pra lhe ver, pra lhe ver, pra lhe ver, pra lhe ver, pra lhe ver<br><br>Refrain<br>Pra lhe ver, pra lhe ver, pra lhe ver, pra lhe ver, pra lhe ver…`,
          '/assets/data-Back-end/songs/vimdabahia.mp3'
        ),
      ]
    ),

    // Chansons complexes
    new UserDataContentModel(
      'Chansons complexes',
      "Ici vous trouverez d'autres idées de 'corridos', afin d'étoffer votre répertoire, un peu plus complexes.",
      'Adultes',
      [
        new UsersDataSongModel(
          'song',
          'all',
          'Vai-la-no-Brasil',
          'Vai la no Brasil',
          'Mestre Liminha',
          'Mestre Liminha',
          `Vai la no Brasil não fique de bobeira<br>Desce la pra Santos tu vai ver o que é capoeira<br><br>Refrain :<br>Vai la no Brasil não fique de bobeira<br><br>Desce la pra Santos tu vai ver o que é capoeira<br><br>Vai la no Brasil não fique de bobeira<br><br>Desce la pra Santos tu vai ver o que é capoeira<br><br>Refrain :<br><br>Tu vai la na Senzala ou vai no Mestre Bandeira<br><br>Refrain :<br><br>Vai na Praia Grande tu vai ver o que é capoeira<br><br>Refrain :<br><br>Tu vai em Cubatão tu vai ver o que é capoeira<br><br>Refrain :<br><br>Vai la na Senzala de senguda à sexta-feira`,
          '/assets/data-Back-end/songs/vaila.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'E-me-leva-na-Bahia',
          'Ê me leva na Bahia',
          'Mestrando Duende',
          'Mestrando Duende',
          `Refrain :<br>Ê me leva na Bahia<br>Ê leva na Bahia<br><br>Vou conhecer a Fazenda Estiva<br>Na terra do Jacobina<br>Meu mestre veio de lá<br>Olha eu vou na Bahia<br><br>Refrain :<br><br>Côco mironga<br>Na Bahia chama dendê<br>Dá o tempero ao Caruru<br>E também ao vatapá<br>Olha eu vou na Bahia<br><br>Refrain :<br><br>A casa de pedra<br>Que foi cativeiro de escravo<br>Onde o navio negreiro<br>Chegava na beira do mar<br>Olha eu vou na Bahia<br><br>Refrain :<br><br>Lá tem macumba<br>No pé de iroco velho<br>Na casa de Pai Xangô<br>No Axé Opô Afonjá<br>Olha eu vou na Bahia<br><br>Refrain :<br><br>Minha Bahia<br>Berço da cultura brasileira<br>É terra de Mestre Bimba<br>E também da Capoeira<br>Olha eu vou na Bahia<br><br>Refrain :`,
          '/assets/data-Back-end/songs/melevanabahia.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Marinheiro-so',
          'Marinheiro só',
          'Domaine public',
          'Mestre Boca Rica',
          `Eu não sou daqui<br><strong>Marinheiro só</strong><br><br>Eu não tenho amor<br><strong>Marinheiro só</strong><br><br>Eu sou da Bahia<br><strong>Marinheiro só</strong><br><br>De São Salvador<br><strong>Marinheiro só</strong><br><br>O Marinheiro, Marinheiro<br><strong>Marinheiro só</strong><br><br>Quem te ensinou a nadar<br><strong>Marinheiro só</strong><br><br>Foi o tombo do navio<br><strong>Marinheiro só</strong><br><br>Foi o balanço do mar<br><strong>Marinheiro só</strong><br><br>La vem, la vem<br><strong>Marinheiro só</strong><br><br>Como vem faceiro<br><strong>Marinheiro só</strong><br><br>Todo de branco<br><strong>Marinheiro só</strong><br><br>Com o seu bonezinho<br><strong>Marinheiro só</strong>`,
          '/assets/data-Back-end/songs/marinheiro.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Bimba-mandou-bater',
          'Bimba mandou bater',
          'Mestre Eduardo STORTI',
          'Mestre Eduardo STORTI',
          `Bimba mandou bater<br>Bimba mandou bater<br>Bimba mandou bater<br>A palma de 1, 2, 3……olha Bimba<br><br>Refrain :<br>Bimba mandou bater<br>Bimba mandou bater<br>Bimba mandou bater<br>A palma de 1, 2, 3…..olha Bimba<br><br>Ooo Bimba mandou bater camara<br>A palma de 1, 2, 3<br>Vamos nós sempre batendo<br>Pois Bimba é nosso rei….olha Bimba<br><br>Refrain<br><br>Ooo Bimba mandou bater camara<br>A palma de 1, 2, 3<br>Vamos nós sempre batendo<br>Pois Bimba é nosso rei….olha Bimba<br><br>Refrain<br><br>Ooo Bimba mandou bater camarada<br>A palma com energia<br>Pra poder contagiar<br>O povo da Bahia…olha Bimba<br><br>Refrain<br><br>Ooo Bimba grande Mestre<br>Homem assim não teve igual<br>Pos a palma de 1, 2, 3<br>Na capoeira regional….olha Bimba<br><br>Refrain<br><br>Ooo Bimba mandou bater<br>Com a palma da mão<br>Vamos nós sempre batendo<br>Pra manter a tradição…olha Bimba<br><br>Refrain`,
          '/assets/data-Back-end/songs/bimba.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Eu-vou-botar-a-minha-rede',
          'Eu vou botar a minha rede',
          'Contramestre Chico Porreta',
          'Mestre Eduardo STORTI',
          `Eu vou botar a minha rede na varanda<br>Eu quero ver a minha rede balançar<br>Balança rede io io<br>Balança rede ia ia<br><br>refrain:<br>Eu vou botar a minha rede na varanda<br>Eu quero ver a minha rede balançar<br>Balança rede io io<br>Balança rede ia ia`,
          '/assets/data-Back-end/songs/minharede.mp3'
        ),
        new UsersDataSongModel(
          'song',
          'all',
          'Capoeira-me-chama',
          'Capoeira me chama',
          'Maria Elizabeth de J. Silva & Aparício Nasciment',
          'Mestre Brasilia',
          `Capoeira me chama<br>E eu vou atender<br>Entro na roda sem medo<br>Com malícia e segredo<br>Pronto pra me defender<br><br>Refrain :<br>Capoeira me chama<br>E eu vou atender<br>Entro na roda sem medo<br>Com malícia e segredo<br>Pronto pra me defender<br><br>Com o corpo de molejo<br>Vou de encontro ao berimbau<br>Quem não sabe agora aprende<br>É o arame, a cabaça e um pedaço de pau<br><br>Iê aaaaa, iê ooooo<br>Capoeira me chama da licença meu senhor<br><br>Refrain :<br>Iê aaaaa, iê ooooo<br>Capoeira me chama da licença meu senhor<br><br>Você dança e se defende<br>Nesta ginga original<br>Que mexe tanto com a gente<br>Envolvendo até a mente<br>Na origem mundial<br><br>Iê aaaaa, iê ooooo<br>Capoeira me chama da licença meu senhor `,
          '/assets/data-Back-end/songs/capoeiramechama.mp3'
        ),
      ]
    ),
  ]),
];
