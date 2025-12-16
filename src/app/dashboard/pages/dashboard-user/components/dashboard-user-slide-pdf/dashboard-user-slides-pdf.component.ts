import { Component, Input } from '@angular/core';
import { UsersDataPdfModel } from '../../../../../datas-Back-end/models/UserData-pdf.model';

@Component({
  selector: 'app-dashboard-user-slides-pdf',
  imports: [],
  templateUrl: './dashboard-user-slides-pdf.component.html',
  styleUrl: './dashboard-user-slides-pdf.component.scss',
})
export class DashboardUserSlidesPdfComponent {
  @Input() link!: UsersDataPdfModel;

  downloadPdf(url: string, nameDownLoad: string): void {
    const a = document.createElement('a');
    a.href = url;
    a.download = `${nameDownLoad}.pdf`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
