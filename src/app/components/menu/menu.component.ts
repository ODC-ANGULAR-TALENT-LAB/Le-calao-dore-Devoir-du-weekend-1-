import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'entree' | 'plat' | 'dessert';
}

@Component({
  selector: 'app-menu',
  imports: [NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  /** Catégorie sélectionnée par le filtre ('all' = tout afficher) */
  selectedCategory: 'all' | 'entree' | 'plat' | 'dessert' = 'all';

  /** Boutons de filtrage affichés au-dessus de la grille */
  filters = [
    { key: 'all', label: 'Tout' },
    { key: 'entree', label: 'Entrées' },
    { key: 'plat', label: 'Plats' },
    { key: 'dessert', label: 'Desserts' }
  ] as const;

  dishes: Dish[] = [
    { id: 1, name: 'Beignets haricots', description: 'Beignets de niébé maison', price: 1500, category: 'entree' },
    { id: 2, name: 'Folong', description: 'Salade traditionnelle au folon', price: 2000, category: 'entree' },
    { id: 3, name: 'Ndolé aux crevettes', description: 'Spécialité douala emblématique', price: 5500, category: 'plat' },
    { id: 4, name: 'Poulet DG', description: 'Plantain mûr, légumes croquants', price: 6000, category: 'plat' },
    { id: 5, name: 'Eru aux écailles', description: 'Légume forestier, viande fumée', price: 5000, category: 'plat' },
    { id: 6, name: 'Mbongo Tchobi', description: 'Sauce noire aux épices sauvages', price: 5500, category: 'plat' },
    { id: 7, name: 'Pain perdu coco', description: 'Brioche, lait de coco, miel', price: 2500, category: 'dessert' },
    { id: 8, name: 'Bananes flambées', description: 'Plantain caramélisé, rhum', price: 2000, category: 'dessert' }
  ];

  /** Liste filtrée selon la catégorie active */
  get filteredDishes(): Dish[] {
    if (this.selectedCategory === 'all') {
      return this.dishes;
    }
    return this.dishes.filter(d => d.category === this.selectedCategory);
  }

  /** Change le filtre actif */
  setFilter(key: 'all' | 'entree' | 'plat' | 'dessert') {
    this.selectedCategory = key;
  }

  /** Formate le prix à la française : 5 500 */
  formatPrice(price: number): string {
    return price.toLocaleString('fr-FR');
  }
}
