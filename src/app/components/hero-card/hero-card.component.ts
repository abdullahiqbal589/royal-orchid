import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {
  @Input() image!: string; // Use '!' to indicate that image is required
  @Input() text!: string;  // Use '!' to indicate that text is required
}
