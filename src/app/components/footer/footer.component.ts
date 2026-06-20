import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  /** Année courante pour le copyright (toujours à jour) */
  annee = new Date().getFullYear();
}
