import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features = [
    { title: 'Vegan Options', subtitle: 'Using the freshest and best ingredients we can find.', emoji: '🥬' },
    { title: 'Gluten Free', subtitle: 'Using the freshest and best ingredients we can find.', emoji: '🍞' },
    { title: 'Freshly Made', subtitle: 'Using the freshest and best ingredients we can find.', emoji: '🍳' },
    { title: 'Natural Products', subtitle: 'Using the freshest and best ingredients we can find.', emoji: '🥫' }
  ];
}
