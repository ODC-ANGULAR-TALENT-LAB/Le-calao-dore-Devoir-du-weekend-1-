import { Component } from '@angular/core';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
}

@Component({
  selector: 'app-temoignages',
  imports: [],
  templateUrl: './temoignages.component.html',
  styleUrl: './temoignages.component.css'
})
export class TemoignagesComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Aïssatou M.',
      rating: 5,
      text: 'Le Ndolé est le meilleur de Douala. Service impeccable.'
    },
    {
      id: 2,
      name: 'Jean-Pierre K.',
      rating: 4,
      text: 'Ambiance chaleureuse et plats généreux. Je recommande.'
    },
    {
      id: 3,
      name: 'Christelle E.',
      rating: 5,
      text: 'Cadre magnifique, cuisine authentique, prix raisonnables.'
    }
  ];

  /**
   * Helper : génère un tableau de la longueur de la note
   * pour afficher N étoiles pleines avec @for.
   */
  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  /** Étoiles vides restantes (sur 5) pour compléter visuellement la note */
  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }

  /** Initiales du client pour l'avatar (ex : « Aïssatou M. » → « AM ») */
  getInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  }
}
