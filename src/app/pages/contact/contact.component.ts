import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  facts = [
    { title: 'Contact Us', subtitle: '+61 000-000-000' },
    { title: 'Our Location', subtitle: '4231 Westheimer St. Santa Ana 85486' },
    { title: 'Email Us', subtitle: 'royalorchid@website.com' }
  ];
}
