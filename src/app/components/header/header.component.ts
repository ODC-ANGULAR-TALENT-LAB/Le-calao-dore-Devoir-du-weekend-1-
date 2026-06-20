import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  /** État du menu burger (ouvert / fermé) sur mobile */
  isMenuOpen = false;

  /** Vrai si la largeur de l'écran correspond au mobile (< 600px) */
  isMobile = false;

  /** Vrai dès que la page a été défilée (header plus compact / opaque) */
  isScrolled = false;

  /** Lien actuellement actif dans la navbar */
  activeLink = 'Accueil';

  /** Les 5 liens de navigation (avec leur ancre de destination) */
  links = [
    { label: 'Accueil', target: 'accueil' },
    { label: 'Menu', target: 'menu' },
    { label: 'Témoignages', target: 'temoignages' },
    { label: 'Horaires', target: 'horaires' },
    { label: 'Contact', target: 'contact' }
  ];

  constructor() {
    this.checkViewport();
  }

  /** Ouvre / ferme le menu burger sur mobile */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /** Active un lien et ferme le menu mobile après le clic */
  setActive(link: string) {
    this.activeLink = link;
    this.isMenuOpen = false; // ferme le menu mobile après clic
  }

  /** Recalcule le mode mobile à chaque redimensionnement de la fenêtre */
  @HostListener('window:resize')
  checkViewport() {
    this.isMobile = window.innerWidth < 600;
    // Sur grand écran, on s'assure que le menu n'est jamais bloqué fermé
    if (!this.isMobile) {
      this.isMenuOpen = false;
    }
  }

  /** Détecte le défilement pour styliser le header (effet « sticky ») */
  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}
