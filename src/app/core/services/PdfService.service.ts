import { Injectable } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

@Injectable({
  providedIn: 'root'
})

export class PdfService {
  constructor() {
    // Worker PDF.js local
    (pdfjsLib as any).GlobalWorkerOptions.workerSrc = '/assets/pdfjs/pdf.worker.mjs';
  }

  async convertFirstPageFromFile(file: File, scale: number = 2): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    return this.convertFirstPageFromArrayBuffer(arrayBuffer, scale);
  }

  async convertFirstPageFromUrl(url: string, scale: number = 2): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Impossible de récupérer le PDF : ${response.status}`);
    const arrayBuffer = await response.arrayBuffer();
    return this.convertFirstPageFromArrayBuffer(arrayBuffer, scale);
  }

  private async convertFirstPageFromArrayBuffer(arrayBuffer: ArrayBuffer, scale: number = 2): Promise<string> {
    const pdf = await (pdfjsLib as any).getDocument({
      data: arrayBuffer,
      cMapUrl: undefined,
      cMapPacked: true,
      jpxWasm: '/assets/pdfjs/jpx.wasm'
    }).promise;

    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: context, viewport }).promise;
    return canvas.toDataURL('image/png');
  }
}
