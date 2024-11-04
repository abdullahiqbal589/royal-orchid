// button.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',  // Corrected this line
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() width: string = 'fit-content';

  get buttonClass() {
    return this.variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  }
}
