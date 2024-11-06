import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  names = [
    'Thai Tea', 'Green Tea', 'Coffee', 'Milk Tea', 'Black Tea',
    'Latte', 'Espresso', 'Cappuccino', 'Hot Chocolate', 'Mocha',
    'Iced Tea', 'Lemonade', 'Smoothie', 'Americano', 'Matcha',
    'Herbal Tea'
  ];
  lunchMenu = [
    {
      name: 'Pad Thai',
      description: 'Crispy Spring Roll Wrapped with vegetables, clear noodles served with sweet and sour sauce.',
      price: '$12',
      image: '../../../assets/images/04.jpg'
    },
    {
      name: 'Green Curry',
      description: 'Spicy green curry with chicken, eggplant, and Thai basil leaves.',
      price: '$15',
      image: '../../../assets/images/05.jpg'
    },
    {
      name: 'Tom Yum Soup',
      description: 'Hot and sour soup with shrimp, mushrooms, lemongrass, and lime leaves.',
      price: '$10',
      image: '../../../assets/images/06.jpg'
    },
    {
      name: 'Red Curry',
      description: 'Rich red curry with beef, bamboo shoots, and coconut milk.',
      price: '$14',
      image: '../../../assets/images/07.jpg'
    },
    {
      name: 'Thai Fried Rice',
      description: 'Stir-fried rice with vegetables, chicken, and a hint of lime.',
      price: '$11',
      image: '../../../assets/images/08.jpg'
    }
  ];
}
