import { ImageModel } from '../../../../core/models/Image.model';
import { PicturesInitialModel } from '../models/PicturesInitial.model';

export const PicturesInitialData = [
  new PicturesInitialModel(
    'firstPicture',
    new ImageModel(
      'assets/data-Back-end/slidesShow/activity-for-all.webp',
      "L'activité faite pour vous",
    ),
  ),
  new PicturesInitialModel(
    'secondPicture',
    new ImageModel('assets/data-Back-end/slidesShow/batizado-2025.webp', 'Le batizado de 2025'),
  ),
  new PicturesInitialModel(
    'thirdPicture',
    new ImageModel('assets/data-Back-end/slidesShow/rentree-2025.webp', 'Bientôt la rentrée'),
  ),
  new PicturesInitialModel(
    'fourthPicture',
    new ImageModel(
      'assets/data-Back-end/slidesShow/rentree2023.webp',
      'Commencer la capoeira dès 3 ans',
    ),
  ),
];
// TODO refaire update slideshow avec cette data
