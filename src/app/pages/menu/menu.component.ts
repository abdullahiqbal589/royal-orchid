import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']  // Change `styleUrl` to `styleUrls` (plural)
})
export class MenuComponent {
   drinks = [
    { name: 'Thai Tea', price: 3.50 },
    { name: 'Green Tea', price: 2.75 },
    { name: 'Coffee', price: 2.50 },
    { name: 'Milk Tea', price: 3.00 },
    { name: 'Black Tea', price: 2.50 },
    { name: 'Latte', price: 4.00 },
    { name: 'Espresso', price: 2.00 },
    { name: 'Cappuccino', price: 3.75 },
    { name: 'Hot Chocolate', price: 3.25 },
    { name: 'Mocha', price: 4.25 },
    { name: 'Iced Tea', price: 2.75 },
    { name: 'Lemonade', price: 2.50 },
    { name: 'Smoothie', price: 4.50 },
    { name: 'Americano', price: 2.75 },
    { name: 'Matcha', price: 4.00 },
    { name: 'Herbal Tea', price: 2.75 }
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
