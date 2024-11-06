import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  items = [
    {
      id: 1,
      date: 'January 18, 2021',
      title: 'The best way to prepare crispy & delicious dinners',
      category: 'Beverages',
      image: '../../../assets/images/05.jpg'
    },
    {
      id: 2,
      date: 'February 10, 2021',
      title: 'Tips for creating healthy and tasty meals',
      category: 'Snacks',
      image: '../../../assets/images/06.jpg'
    },
    {
      id: 3,
      date: 'March 15, 2021',
      title: 'How to make smoothies that taste great',
      category: 'Drinks',
      image: '../../../assets/images/07.jpg'
    },
    {
      id: 4,
      date: 'April 5, 2021',
      title: 'The secrets to perfect baked goods',
      category: 'Desserts',
      image: '../../../assets/images/08.jpg'
    },
    {
      id: 5,
      date: 'May 20, 2021',
      title: 'Ideas for quick and easy breakfasts',
      category: 'Breakfast',
      image: '../../../assets/images/09.jpg'
    }
  ];
  constructor(private router: Router) {}

  openDetail(item: any) {
    this.router.navigate(['/blog-detail', item.id]);
  }
}
