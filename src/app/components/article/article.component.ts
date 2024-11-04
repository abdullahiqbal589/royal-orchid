import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input() id: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() date: string = ''; // Ensure this input is defined
  @Input() category: string = '';
}
