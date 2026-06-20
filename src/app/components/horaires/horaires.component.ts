import { Component } from '@angular/core';

interface Horaire {
  jour: string;
  ouverture: string;
  fermeture: string;
  ferme: boolean;
}

@Component({
  selector: 'app-horaires',
  imports: [],
  templateUrl: './horaires.component.html',
  styleUrl: './horaires.component.css'
})
export class HorairesComponent {
  horaires: Horaire[] = [
    { jour: 'Lundi', ouverture: '11h00', fermeture: '22h00', ferme: false },
    { jour: 'Mardi', ouverture: '11h00', fermeture: '22h00', ferme: false },
    { jour: 'Mercredi', ouverture: '11h00', fermeture: '22h00', ferme: false },
    { jour: 'Jeudi', ouverture: '11h00', fermeture: '22h00', ferme: false },
    { jour: 'Vendredi', ouverture: '11h00', fermeture: '23h00', ferme: false },
    { jour: 'Samedi', ouverture: '11h00', fermeture: '23h00', ferme: false },
    { jour: 'Dimanche', ouverture: '', fermeture: '', ferme: true }
  ];

  // Helper : vrai jour courant en français
  joursFR = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  /** Renvoie le nom du jour actuel (ex : « Vendredi ») */
  get jourActuel(): string {
    return this.joursFR[new Date().getDay()];
  }

  /** Renvoie l'objet Horaire correspondant au jour actuel */
  get horaireDuJour(): Horaire | undefined {
    return this.horaires.find(h => h.jour === this.jourActuel);
  }

  /**
   * Détermine si le restaurant est OUVERT MAINTENANT :
   * le jour ne doit pas être fermé ET l'heure courante doit
   * se situer entre l'ouverture et la fermeture.
   */
  get isOpenNow(): boolean {
    const h = this.horaireDuJour;
    if (!h || h.ferme) {
      return false;
    }
    const now = new Date();
    const minutesNow = now.getHours() * 60 + now.getMinutes();
    return minutesNow >= this.toMinutes(h.ouverture) && minutesNow < this.toMinutes(h.fermeture);
  }

  /** Convertit une heure « 11h00 » en minutes depuis minuit (660) */
  private toMinutes(heure: string): number {
    const [h, m] = heure.split('h');
    return parseInt(h, 10) * 60 + parseInt(m || '0', 10);
  }
}
