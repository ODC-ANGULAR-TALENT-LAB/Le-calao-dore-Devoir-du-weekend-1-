import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  /** Image de fond dynamique (modifiable facilement via cette variable) */
  backgroundImage = '/assets/images/hero-restaurant.jpg';

  title = 'Saveurs authentiques du Cameroun';
  subtitle = '15 ans de tradition culinaire à Douala';

  /** Quelques chiffres clés affichés sous le titre */
  stats = [
    { value: '15', label: "ans d'expérience" },
    { value: '40+', label: 'plats traditionnels' },
    { value: '4.9', label: 'note moyenne' }
  ];
}
