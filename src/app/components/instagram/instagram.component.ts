import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.css'
})
export class InstagramComponent {
  images = [
    { image: '/assets/images/08.jpg' },
    { image: '/assets/images/09.jpg' },
    { image: '/assets/images/10.jpg' },
    { image: '/assets/images/03.jpg' },
  ];
}
