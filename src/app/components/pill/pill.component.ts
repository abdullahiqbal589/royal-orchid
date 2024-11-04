import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.css'
})
export class PillComponent {
  @Input() text: string = '';
}
