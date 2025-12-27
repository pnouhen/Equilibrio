import { Component, Input } from '@angular/core';
import { UsersDataPdfModel } from '../../../../../datas-Back-end/models/UserData-pdf.model';

@Component({
  selector: 'app-user-dashboard-slides-pdf',
  imports: [],
  templateUrl: './user-dashboard-slides-pdf.component.html',
  styleUrl: './user-dashboard-slides-pdf.component.scss',
})
export class UserDashboardSlidesPdfComponent {
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
