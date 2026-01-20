import { Component, Input } from '@angular/core';
import { UsersDataPdfModel } from '../../../../../datas-Back-end/models/UserData-pdf.model';

@Component({
  selector: 'app-student-dashboard-slides-pdf',
  imports: [],
  templateUrl: './student-dashboard-slides-pdf.component.html',
  styleUrl: './student-dashboard-slides-pdf.component.scss',
})
export class StudentDashboardSlidesPdfComponent {
  @Input() link!: UsersDataPdfModel;
  @Input() isCreate: boolean = false;

  downloadPdf(url: string, nameDownLoad: string): void {
    const a = document.createElement('a');
    a.href = url;
    a.download = `${nameDownLoad}`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
