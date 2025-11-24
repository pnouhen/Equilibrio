import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-error404',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss',
})
export class Error404Component {

}
