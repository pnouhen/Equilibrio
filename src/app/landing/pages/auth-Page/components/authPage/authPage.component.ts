import { AuthpageConnexionFormComponent } from './../authpage-connexion-form/authpage-connexion-form.component';
import { AuthpageInscriptionFormComponent } from './../authpage-inscription-form/authpage-inscription-form.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-authPage',
  imports: [AuthpageConnexionFormComponent, AuthpageInscriptionFormComponent ],
  templateUrl: './authPage.component.html',
  styleUrl: './authPage.component.scss',
})
export class AuthPageComponent {
  
}
