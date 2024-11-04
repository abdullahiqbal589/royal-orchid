import { Component } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent {
  facts = [
    { title: '10,000', subtitle: 'Finally, you must come to embrace slowness as a virtue in itself.' },
    { title: '99%', subtitle: 'Finally, you must come to embrace slowness as a virtue in itself.' },
    { title: '20+', subtitle: 'Finally, you must come to embrace slowness as a virtue in itself.' }
  ];
}
