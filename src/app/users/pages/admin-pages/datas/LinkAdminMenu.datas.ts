import { LinkMenuModel } from '../../../../core/models/LinkMenu.model';

export const LinkAdminMenuData: LinkMenuModel[] = [
  new LinkMenuModel(
    'update-slides-shows-pictures',
    'modification-photos-carousel',
    'Modifier les photos du carousel'
  ),
  new LinkMenuModel(
    'update-training-resumes',
    'modification-dates-reprises-entrainement',
    "Modifier les dates de reprise d'entraînement"
  ),
  new LinkMenuModel(
    'manage-places-times',
    'gestion-lieux-horaires',
    "Gérer les lieux et horaires d'entraînement"
  ),
  new LinkMenuModel('manage-users', 'gestion-adherants', 'Gestion des adhérants'),
  new LinkMenuModel('manage-resources', 'gestions-ressources', 'Gestion des ressources'),
];
