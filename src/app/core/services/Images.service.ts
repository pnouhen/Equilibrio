import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  updatePicture(src: string): Promise<string> {
    return fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur de chargement de l’image');
        }
        return response.blob();
      })
      .then((blob) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();

          reader.onloadend = () => {
            resolve(reader.result as string);
          };

          reader.onerror = () => {
            reject('Erreur de lecture du fichier');
          };

          reader.readAsDataURL(blob);
        });
      });
  }

  convertAndSaveImage(data: File | Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;
      resolve(result); 
    };

    reader.onerror = (error) => {
      console.error('Erreur de lecture du fichier:', error);
      reject(error);
    };

    reader.readAsDataURL(data);
  });
}
}
