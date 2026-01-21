import { CategoriesService } from './../../../../../services/Categories.service';
import { UsersDashboardDataService } from './../../../../../../core/services/UsersDashboard.service';
import { Injectable } from '@angular/core';
import { UsersDataLinkModel } from '../../../../../../datas-Back-end/models/UserData-link.model';
import { UsersDataPdfModel } from '../../../../../../datas-Back-end/models/UserData-pdf.model';
import { UsersDataSongModel } from '../../../../../../datas-Back-end/models/UsersData-song.model';
import { UserDataContentModel } from '../../../../../../datas-Back-end/models/UserData-content.model';
import { CateogriesModel } from '../../../models/Categories.model';

@Injectable({
  providedIn: 'root',
})
export class ManageResourcesFormService {
  title!: string;
  categoriesData!: CateogriesModel[];

  // Content
  subtitle!: string;
  description!: string;
  categoriesContent!: CateogriesModel[];
  typeLinkText: string = 'Sélectionner';
  contentCreated: UserDataContentModel[] = [
    {
      id: '1',
      subTitle: 'Retour sur 20 ans de parcours d’Équilibrio en France',
      description: 'Description parcours d’Équilibrio en France',
      categories: ['Baby', 'Enfant', 'Ados', 'Adulte'],
      links: [
        {
          id: '0',
          type: 'video',
          title: 'Les 20 ans du groupe équilibrio en France',
          grade: 'novato',
          url: 'https://www.youtube.com/embed/gM0Bwb5oIE0',
        },
        {
          id: '1',
          type: 'pdf',
          grade: 'novato',
          nameDownLoad: 'le-brésil-pour-les-enfants.pdf',
          linkImage:
            '/assets/data-Back-end/pdf/le-brésil-pour-les-enfants/le-brésil-pour-les-enfants.webp',

          linkPdf:
            '/assets/data-Back-end/pdf/le-brésil-pour-les-enfants/le-brésil-pour-les-enfants.pdf',
        },
        {
          id: '2',
          type: 'song',
          title: 'Capoeira-me-chama',
          author: 'Maria Elizabeth de J. Silva & Aparício Nasciment',
          interpreter: 'Mestre Brasilia',
          lyrics: `Capoeira me chama<br>E eu vou atender<br>Entro na roda sem medo<br>Com malícia e segredo<br>Pronto pra me defender<br><br>Refrain :<br>Capoeira me chama<br>E eu vou atender<br>Entro na roda sem medo<br>Com malícia e segredo<br>Pronto pra me defender<br><br>Com o corpo de molejo<br>Vou de encontro ao berimbau<br>Quem não sabe agora aprende<br>É o arame, a cabaça e um pedaço de pau<br><br>Iê aaaaa, iê ooooo<br>Capoeira me chama da licença meu senhor<br><br>Refrain :<br>Iê aaaaa, iê ooooo<br>Capoeira me chama da licença meu senhor<br><br>Você dança e se defende<br>Nesta ginga original<br>Que mexe tanto com a gente<br>Envolvendo até a mente<br>Na origem mundial<br><br>Iê aaaaa, iê ooooo<br>Capoeira me chama da licença meu senhor `,
          link: '/assets/data-Back-end/songs/capoeiramechama.mp3',
        },
      ],
    },
    {
      id: '0',
      subTitle: 'Retour sur 20 ans de parcours d’Équilibrio en France',
      description: 'Description parcours d’Équilibrio en France',
      categories: ['Baby', 'Enfant', 'Ados', 'Adulte'],
      links: [
        {
          id: '0',
          type: 'video',
          title: 'Les 20 ans du groupe équilibrio en France',
          grade: 'novato',
          url: 'https://www.youtube.com/embed/gM0Bwb5oIE0',
        },
        {
          id: '1',
          type: 'pdf',
          grade: 'novato',
          nameDownLoad: 'le-brésil-pour-les-enfants.pdf',
          linkImage:
            '/assets/data-Back-end/pdf/le-brésil-pour-les-enfants/le-brésil-pour-les-enfants.webp',

          linkPdf:
            '/assets/data-Back-end/pdf/le-brésil-pour-les-enfants/le-brésil-pour-les-enfants.pdf',
        },
        {
          id: '2',
          type: 'song',
          title: 'Capoeira-me-chama',
          author: 'Maria Elizabeth de J. Silva & Aparício Nasciment',
          interpreter: 'Mestre Brasilia',
          lyrics: `Capoeira me chama<br>E eu vou atender<br>Entro na roda sem medo<br>Com malícia e segredo<br>Pronto pra me defender<br><br>Refrain :<br>Capoeira me chama<br>E eu vou atender<br>Entro na roda sem medo<br>Com malícia e segredo<br>Pronto pra me defender<br><br>Com o corpo de molejo<br>Vou de encontro ao berimbau<br>Quem não sabe agora aprende<br>É o arame, a cabaça e um pedaço de pau<br><br>Iê aaaaa, iê ooooo<br>Capoeira me chama da licença meu senhor<br><br>Refrain :<br>Iê aaaaa, iê ooooo<br>Capoeira me chama da licença meu senhor<br><br>Você dança e se defende<br>Nesta ginga original<br>Que mexe tanto com a gente<br>Envolvendo até a mente<br>Na origem mundial<br><br>Iê aaaaa, iê ooooo<br>Capoeira me chama da licença meu senhor `,
          link: '/assets/data-Back-end/songs/capoeiramechama.mp3',
        },
      ],
    },
  ];
  links: (UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel)[] = [];

  // Id for Update
  idUpdateData!: string | null;
  idUpdateContent!: string | null;

  // Display Message form fieldset
  isSubmittedContent: boolean = false;
  isSubmittedLink: boolean = false;

  constructor(
    public usersDashboardDataService: UsersDashboardDataService,
    public categoriesService: CategoriesService,
  ) {}

  convertString(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Résultat invalide'));
        }
      };

      reader.onerror = () => {
        reject(reader.error);
      };

      reader.readAsDataURL(file);
    });
  }

  updateResource(id: string | undefined) {
    if (id) {
      this.idUpdateData = id;

      const dataUpdate = this.usersDashboardDataService
        .UsersDashboardDataService()
        .find((data) => data.id === id);

      if (dataUpdate) {
        this.title = dataUpdate.title;
        this.categoriesData = this.categoriesService.generateCategoriesData(dataUpdate.categories);
        this.contentCreated = dataUpdate.content.map((content) => ({
          ...content,
          categories: this.categoriesService.changeCategoriesValue(content.categories, false),
        }));
      }
    }
  }

  deleteResource(id: string | undefined) {
    if (id) {
      this.usersDashboardDataService.UsersDashboardDataService.set(
        this.usersDashboardDataService.UsersDashboardDataService().filter((data) => data.id !== id),
      );

      sessionStorage.setItem(
        'usersDashboard',
        JSON.stringify(this.usersDashboardDataService.UsersDashboardDataService()),
      );
    }
  }
}
